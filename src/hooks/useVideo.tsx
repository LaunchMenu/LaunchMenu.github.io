import {Field, IDataHook} from "model-react";
import {FC, Fragment, useEffect, useRef} from "react";
import {IVideoComp} from "../components/home/videoService/LMVideosProvider";

export function useVideo(
    config: IVideoConfig
): {
    Video: IVideoComp;
    controls: IVideoControls;
} {
    const ref = useRef<HTMLVideoElement>(null);

    const data = useRef<{
        buffered: Field<number>;
        time: Field<number>;
        playing: Field<boolean>;
        volume: Field<number>;
        duration: Field<number>;
    }>();
    const controls = useRef<IVideoControls>();
    if (!controls.current) {
        const buffered = new Field(0);
        const time = new Field(0);
        const playing = new Field(false);
        const volume = new Field(0);
        const duration = new Field(0);
        data.current = {
            buffered,
            time,
            playing,
            volume,
            duration,
        };

        controls.current = {
            play: () => {
                ref.current?.play();
                if (ref.current) playing.set(true);
            },
            pause: () => {
                ref.current?.pause();
                if (ref.current) playing.set(false);
            },
            setTime: time => {
                if (ref.current) ref.current.currentTime = time;
            },
            setSpeed: rate => {
                if (ref.current) ref.current.playbackRate = rate;
            },
            setVolume: volume => {
                if (ref.current) ref.current.volume = volume;
            },
            setFullscreen: () => {
                const video = ref.current;
                if (video) {
                    if (video.requestFullscreen) {
                        video.requestFullscreen();
                    } else if ((video as any).webkitRequestFullscreen) {
                        /* Safari */
                        (video as any).webkitRequestFullscreen();
                    } else if ((video as any).msRequestFullscreen) {
                        /* IE11 */
                        (video as any).msRequestFullscreen();
                    }
                }
            },
            isPlaying: (hook?: IDataHook) => playing.get(hook),
            getBuffered: (hook?: IDataHook) => buffered.get(hook),
            getTime: (hook?: IDataHook) => time.get(hook),
            gerDuration: (hook?: IDataHook) => duration.get(hook),
            getVolume: (hook?: IDataHook) => volume.get(hook),
        };
    }

    useEffect(() => {
        const el = ref.current;
        if (el && data.current) {
            const {time, buffered, playing, volume, duration} = data.current;

            const updateBuffered = () => {
                if (data.current) {
                    // src: https://stackoverflow.com/a/5182578/8521718
                    let range = 0;
                    const bf = el.buffered;
                    const time = el.currentTime;

                    while (
                        range < bf.length &&
                        !(bf.start(range) <= time && time <= bf.end(range))
                    )
                        range += 1;

                    buffered.set(range < bf.length ? bf.end(range) : 0);
                }
            };
            el.ontimeupdate = ev => {
                config.onTimeUpdate?.(el.currentTime, el, ev);
                if (data.current) time.set(el.currentTime);
                updateBuffered();
            };
            el.onprogress = updateBuffered;
            el.onplay = () => playing.set(true);
            el.onpause = () => playing.set(false);
            el.onvolumechange = () => volume.set(el.volume);
            el.ondurationchange = () => duration.set(el.duration);

            // init
            volume.set(el.volume);
            duration.set(el.duration);
        }
    }, [ref.current]);

    const video = useRef<{Comp: IVideoComp; src: string}>();
    if (!video.current || video.current.src != config.src) {
        const src = config.src;
        const onClick = () => {
            if (ref.current) {
                if (ref.current.paused) ref.current.play();
                else ref.current.pause();
            }
        };

        video.current = {
            Comp: ({width, placeholder, className}) => (
                <video
                    poster={placeholder}
                    className={className}
                    onClick={onClick}
                    ref={ref}
                    width={width}
                    muted={config.muted ?? true}>
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
    muted?: boolean;
    onTimeUpdate?: (
        currentTime: number,
        video: HTMLVideoElement,
        ev: Event
    ) => any;
};

export type IVideoControls = {
    play: () => void;
    pause: () => void;
    setTime: (time: number) => void;
    setSpeed: (rate: number) => void;
    setVolume: (volume: number) => void;
    setFullscreen: () => void;
    isPlaying: (hook?: IDataHook) => boolean;
    getBuffered: (hook?: IDataHook) => number;
    getTime: (hook?: IDataHook) => number;
    gerDuration: (hook?: IDataHook) => number;
    getVolume: (hook?: IDataHook) => number;
};
