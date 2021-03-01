import {FC, useEffect, useRef} from "react";

export function useVideo(
    config: IVideoConfig
): {
    Video: FC<{width?: number}>;
    controls: IVideoControls;
} {
    const ref = useRef<HTMLVideoElement>(null);

    const controls = useRef<IVideoControls>();
    if (!controls.current) {
        let playing = false;
        controls.current = {
            play: () => {
                ref.current?.play();
                if (ref.current) playing = true;
            },
            pause: () => {
                ref.current?.pause();
                if (ref.current) playing = false;
            },
            isPlaying: () => playing,
            setTime: time => {
                if (ref.current) ref.current.currentTime = time;
            },
            setSpeed: rate => {
                if (ref.current) ref.current.playbackRate = rate;
            },
        };
    }

    useEffect(() => {
        if (ref.current) {
            ref.current.ontimeupdate = ev =>
                ref.current &&
                config.onTimeUpdate?.(
                    ref.current?.currentTime,
                    ref.current,
                    ev
                );
        }
    }, [ref.current]);

    const video = useRef<{Comp: FC<{width?: number}>; src: string}>();
    if (!video.current || video.current.src != config.src) {
        const src = config.src;
        video.current = {
            Comp: () => (
                <video ref={ref}>
                    <source src={src} type="video/mp4" />
                    <p>
                        Your browser doesn't support HTML5 video. Here is a{" "}
                        <a href={src}>link to the video</a> instead.
                    </p>
                </video>
            ),
            src,
        };
    }

    return {
        Video: video.current.Comp,
        controls: controls.current,
    };
}

export type IVideoConfig = {
    src: string;
    onTimeUpdate?: (
        currentTime: number,
        video: HTMLVideoElement,
        ev: Event
    ) => any;
};

export type IVideoControls = {
    play: () => void;
    pause: () => void;
    isPlaying: () => boolean;
    setTime: (time: number) => void;
    setSpeed: (rate: number) => void;
};
