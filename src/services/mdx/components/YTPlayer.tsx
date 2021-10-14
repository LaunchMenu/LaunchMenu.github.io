import {useTheme} from "@material-ui/core";
import {useState} from "react";
import {FC, useEffect, useRef} from "react";
import youTubePlayer from "youtube-player";
import {YouTubePlayer} from "youtube-player/dist/types";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {useCallback} from "react";
import {useBodySize} from "../../../hooks/useBodySize";

type IVideoData = {title: string; ID: string; image: string; index: number};
async function getVideoData(ID: string): Promise<{
    title: string;
    image: string;
    author: string;
    width: number;
    height: number;
}> {
    const response = await fetch(
        `https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=${ID}`,
        {credentials: "omit"}
    );
    const data = await response.json();

    return {
        title: data.title,
        image: data.thumbnail_url,
        author: data.author_name,
        width: data.width,
        height: data.height,
    };
}

export const YTPlayer: FC<{
    video: string;
    playlist?: string;
    /** Whether to show the videos in the playlist below the video */
    showPlaylistVideos?: boolean;
    /** The width/height ratio that the element should have, the player's width will fill its parent by default. "auto" relies on yt's video data however, which seems to be wrong atm */
    aspectRatio?: number | "auto";
    className?: string;
}> = ({video, playlist, showPlaylistVideos = true, aspectRatio, ...rest}) => {
    const player = useRef<YouTubePlayer>();
    const container = useRef<HTMLDivElement>(null);
    const placeholder = useRef<HTMLDivElement>(null);
    const [videos, setVideos] = useState<IVideoData[]>([]);

    // Create the video player and load the data of the playlist
    useEffect(() => {
        if (placeholder.current) {
            // Create the video player
            const p = (player.current = youTubePlayer(placeholder.current, {
                width: "100%",
                videoId: video,
                playerVars: {
                    listType: "playlist",
                    list: playlist,
                    color: "white",
                    rel: 0,
                },
            }));

            // Get the video data in the playlist
            if (showPlaylistVideos) {
                (async () => {
                    const IDS = await p.getPlaylist();
                    const videos = await Promise.all(
                        IDS.map(async (ID, index) => {
                            try {
                                const data = await getVideoData(ID);
                                return {ID, index, ...data} as IVideoData;
                            } catch {}
                        })
                    );

                    setVideos(videos.filter((b): b is IVideoData => !!b));
                })();
            }

            return () => p.destroy();
        }
    }, []);

    // Load the aspect ratio tracker
    const [contentRatio, setContentRatio] = useState(16 / 9);
    useEffect(() => {
        const p = player.current;
        if (p) {
            let videoID: string = "";
            const updateSize = async () => {
                const params = new URLSearchParams(await p.getVideoUrl());
                const ID = params.get("v");
                if (ID && ID != videoID) {
                    videoID = ID;
                    const data = await getVideoData(ID);
                    setContentRatio(data.width / data.height);
                }
            };
            updateSize();

            p.on("stateChange", updateSize);
            return () => p.removeEventListener("stateChange", updateSize);
        }
    }, []);
    useEffect(() => {
        if (!aspectRatio) return;

        const updateHeight = async () => {
            const p = player.current;
            const el = container.current;
            if (el && p) {
                const playerEl = await p.getIframe();
                let height = 0;
                if (aspectRatio == "auto")
                    height = el.clientWidth / contentRatio;
                else height = el.clientWidth / aspectRatio;
                playerEl.style.height = `${Math.floor(height)}px`;
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, [contentRatio]);

    // Video selection
    const selectVideo = useCallback((index: number) => {
        const p = player.current;
        if (p) p.playVideoAt(index);
    }, []);

    // Render the UI
    return (
        <div ref={container}>
            <div ref={placeholder} {...rest} />

            <div
                css={theme => ({
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    overflow: "hidden",
                    backgroundColor: theme.palette.background.paper,
                    ".gridList": {
                        flexWrap: "nowrap",
                        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS: https://material-ui.com/components/grid-list/
                        transform: "translateZ(0)",
                        minWidth: "100%",
                    },
                    ".tile": {
                        cursor: "pointer",
                        [theme.breakpoints.down("xs")]: {
                            width: "50% !important",
                        },
                    },
                    ".title": {
                        fontSize: 14,
                        whiteSpace: "normal",
                    },
                    ".titleBar": {
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0) 100%)",
                        height: "auto",
                        paddingTop: 16,
                        paddingBottom: 8,
                    },
                })}>
                {videos && (
                    <GridList cellHeight={130} className="gridList" cols={3}>
                        {videos.map(({title, image, index}) => (
                            <GridListTile
                                key={image}
                                className="tile"
                                onClick={() => selectVideo(index)}>
                                <img src={image} alt={title} />
                                <GridListTileBar
                                    title={title}
                                    classes={{
                                        root: "titleBar",
                                        title: "title",
                                    }}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                )}
            </div>
        </div>
    );
};
