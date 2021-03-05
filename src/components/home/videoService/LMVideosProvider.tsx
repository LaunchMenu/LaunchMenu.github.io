import {Field, IDataHook, useDataHook} from "model-react";
import {FC, useCallback, useEffect, useRef} from "react";
import useResizeObserver from "use-resize-observer";
import {IVideoControls} from "../../../hooks/useVideo";
import {Fade} from "../../Fade";
import {ILMVideosContext, LMVideosContext} from "./LMVideosContext";

export const LMVideosProvider: FC = ({children}) => {
    const data = useRef<
        ILMVideosContext & {boundingBox: Field<DOMRect | undefined>}
    >();
    if (!data.current) {
        const boundingBox = new Field(undefined);
        const videos = new Field<IVideos>([]);
        data.current = {
            pushVideo: (src: string, onTimeChange: (time: number) => void) => {
                const currentVideos = videos.get();
                currentVideos.forEach(({controls}) => controls.pause());

                const {Video, controls} = createVideo(src, onTimeChange);
                videos.set([...currentVideos, {src, Video, controls}]);
                return controls;
            },
            popVideo: (src: string) => {
                const current = videos.get();
                current
                    .filter(({src: s}) => src == s)
                    .forEach(({controls}) => controls.pause());
                videos.set(current.filter(({src: s}) => src != s));
            },
            Video: ({width}: {width: number}) => {
                const [h] = useDataHook();
                const currentVideos = videos.get(h);
                const video = currentVideos[currentVideos.length - 1];
                if (!video) return <Fade childID="" />;
                return (
                    <Fade childID={video.src}>
                        {<video.Video width={width} />}
                    </Fade>
                );
            },
            getBoundingRect: (h?: IDataHook) => boundingBox.get(h),
            boundingBox,
        };
    }

    return (
        <VideosContextContainer boundingBox={data.current.boundingBox}>
            <LMVideosContext.Provider value={data.current as ILMVideosContext}>
                {children}
            </LMVideosContext.Provider>
        </VideosContextContainer>
    );
};

export function getPageRect(element: HTMLDivElement): DOMRect {
    const elRect = element.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    elRect.x = elRect.left - bodyRect.x;
    elRect.y = elRect.top - bodyRect.y;

    return elRect;
}

const VideosContextContainer: FC<{boundingBox: Field<DOMRect | undefined>}> = ({
    children,
    boundingBox,
}) => {
    const elRef = useRef<HTMLDivElement | null>(null);

    const setBB = useCallback(() => {
        if (elRef.current) boundingBox.set(getPageRect(elRef.current));
    }, []);
    const {ref} = useResizeObserver({
        onResize: setBB,
    });
    const setRef = useCallback((el: HTMLDivElement | null) => {
        elRef.current = el;
        ref(el);
    }, []);
    useEffect(setBB, []);

    return <div ref={setRef}>{children}</div>;
};

type IVideos = {
    src: string;
    Video: FC<{width?: number}>;
    controls: IVideoControls;
}[];

function createVideo(
    src: string,
    onTimeUpdate: (time: number) => void = () => {}
): {
    Video: FC<{width?: number}>;
    controls: IVideoControls;
} {
    // Keep track of all video elements
    const videos: HTMLVideoElement[] = [];

    // Create a controls object to control all video elements
    let playing = false;
    let time = 0;
    let rate = 1;
    const controls: IVideoControls = {
        play: () => {
            playing = true;
            videos.forEach(video => video.play());
        },
        pause: () => {
            playing = false;
            videos.forEach(video => video.pause());
        },
        isPlaying: () => playing,
        setTime: t => {
            time = t;
            videos.forEach(video => {
                video.currentTime = time;
            });
        },
        setSpeed: r => {
            rate = r;
            videos.forEach(video => {
                video.playbackRate = rate;
            });
        },
    };

    // Create a react Component to create new video elements
    const Video: FC<{width?: number}> = ({width}) => {
        const ref = useRef<HTMLVideoElement | null>(null);
        const refUpdater = (newRef: HTMLVideoElement | null) => {
            const current = ref.current;
            if (current) {
                const index = videos.indexOf(current);
                if (index != -1) videos.splice(index, 1);
            }
            ref.current = newRef;
            if (newRef) {
                videos.push(newRef);
                if (videos.length == 1)
                    newRef.ontimeupdate = () =>
                        onTimeUpdate(newRef.currentTime);
                newRef.playbackRate = rate;
                newRef.currentTime = time;
                if (playing) newRef.play();
            }
        };
        const onClick = () => {
            if (ref.current) {
                if (ref.current.paused) ref.current.play();
                else ref.current.pause();
            }
        };

        return (
            <video
                width={width}
                ref={refUpdater}
                onClick={onClick}
                muted
                css={{display: "block"}}>
                <source src={src} type="video/mp4" />
                <p>
                    Your browser doesn't support HTML5 video. Here is a{" "}
                    <a href={src}>link to the video</a> instead.
                </p>
            </video>
        );
    };

    return {controls, Video};
}
