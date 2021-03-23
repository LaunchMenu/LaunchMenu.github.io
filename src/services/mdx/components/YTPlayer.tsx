import {FC, useEffect, useRef} from "react";
import youTubePlayer from "youtube-player";
import {YouTubePlayer} from "youtube-player/dist/types";

export const YTPlayer: FC<{
    video?: string;
    playlist?: string;
    className?: string;
}> = ({video, playlist, ...rest}) => {
    const player = useRef<YouTubePlayer>();
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (container.current) {
            const p = (player.current = youTubePlayer(container.current, {
                width: "100%",
                videoId: video,
                playerVars: {
                    listType: "playlist",
                },
            }));
        }
    }, []);

    return <div ref={container} {...rest} />;
};
