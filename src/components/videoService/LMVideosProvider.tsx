import {Field, useDataHook} from "model-react";
import {FC, useRef} from "react";
import {IVideoControls} from "../../hooks/useVideo";
import {Fade} from "../Fade";
import {ILMVideosContext, LMVideosContext} from "./LMVideosContext";

export const LMVideosProvider: FC = ({children}) => {
    const data = useRef<ILMVideosContext>();
    if (!data.current) {
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
                videos.set(videos.get().filter(({src: s}) => src != s));
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
        };
    }

    return (
        <LMVideosContext.Provider value={data.current as ILMVideosContext}>
            {children}
        </LMVideosContext.Provider>
    );
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
            videos.forEach(video => video.play());
            playing = true;
        },
        pause: () => {
            videos.forEach(video => video.pause());
            playing = false;
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

        return (
            <video width={width} ref={refUpdater}>
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
