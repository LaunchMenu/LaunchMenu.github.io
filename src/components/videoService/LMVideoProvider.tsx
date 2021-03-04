import {
    FC,
    memo,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import {useIsMobile} from "../../hooks/useIsMobile";
import {IVideoControls, useVideo} from "../../hooks/useVideo";
import {LMVideoContext} from "./LMVideoContext";
import {LMVideosContext} from "./LMVideosContext";

type IVideoProviderProps = {
    src: string;
    enabled: boolean;
    autoPlay?: boolean;
};

export const LMVideoProvider: FC<
    IVideoProviderProps & {forceRemote?: boolean}
> = memo(({forceRemote, ...props}) => {
    const isMobile = useIsMobile();

    if (isMobile && !forceRemote) return <LMLocalVideoProvider {...props} />;
    return <LMRemoteVideoProvider {...props} />;
});

// The standard provider version that will add the videos to the vidoes context
const LMRemoteVideoProvider: FC<IVideoProviderProps> = ({
    src,
    enabled,
    autoPlay = true,
    children,
}) => {
    // Setup a variable to call time listeners, and a function to invoke them
    const listeners = useRef<((time: number) => void)[]>([]);

    const pauseTime = useRef(Infinity);
    const onTimeChange = useCallback(time => {
        if (time >= pauseTime.current) {
            const controller = videoController.current;
            controller?.pause();
            controller?.setTime(pauseTime.current);
            pauseTime.current = Infinity;
        }
        listeners.current.forEach(listener => listener(time));
    }, []);

    // Register the video in the videos context when the video is enabled
    const {pushVideo, popVideo} = useContext(LMVideosContext);
    const [, _forceUpdate] = useState(false);
    const videoController = useRef<IVideoControls>();
    useEffect(() => {
        if (enabled) {
            const controls = pushVideo(src, onTimeChange);
            videoController.current = controls;
            if (autoPlay) controls.play();
        } else {
            popVideo(src);
            videoController.current = undefined;
        }
        _forceUpdate(f => !f);
    }, [enabled]);

    // Create and return the provider
    return (
        <LMVideoContext.Provider
            value={{
                registerTimeListener: listener => {
                    listeners.current.push(listener);
                    return () => {
                        const index = listeners.current.indexOf(listener);
                        if (index != -1) listeners.current.splice(index, 1);
                    };
                },
                setPauseTime: time => (pauseTime.current = time),
                controls: videoController.current,
            }}>
            {children}
        </LMVideoContext.Provider>
    );
};

// The backup provider version that creates a local video instance, used for simplified layouts
const LMLocalVideoProvider: FC<IVideoProviderProps> = ({
    src,
    enabled,
    autoPlay = true,
    children,
}) => {
    // Setup a variable to call time listeners, and a function to invoke them
    const listeners = useRef<((time: number) => void)[]>([]);

    const pauseTime = useRef(Infinity);
    const onTimeUpdate = useCallback(time => {
        if (time >= pauseTime.current) {
            controls.pause();
            controls.setTime(pauseTime.current);
            pauseTime.current = Infinity;
        }
        listeners.current.forEach(listener => listener(time));
    }, []);
    const {controls, Video} = useVideo({src, onTimeUpdate});

    useEffect(() => {
        if (autoPlay && enabled) controls.play();
        if (!enabled) controls.pause();
    }, [autoPlay, enabled]);

    // Create and return the provider
    return (
        <LMVideoContext.Provider
            value={{
                registerTimeListener: listener => {
                    listeners.current.push(listener);
                    return () => {
                        const index = listeners.current.indexOf(listener);
                        if (index != -1) listeners.current.splice(index, 1);
                    };
                },
                setPauseTime: time => (pauseTime.current = time),
                controls,
                Video,
            }}>
            {children}
        </LMVideoContext.Provider>
    );
};
