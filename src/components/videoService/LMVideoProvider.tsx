import {
    FC,
    memo,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import {IVideoControls} from "../../hooks/useVideo";
import {LMVideoContext} from "./LMVideoContext";
import {LMVideosContext} from "./LMVideosContext";

export const LMVideoProvider: FC<{
    src: string;
    enabled: boolean;
    autoPlay?: boolean;
}> = memo(({src, enabled, autoPlay = true, children}) => {
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
});
