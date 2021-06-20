import {Box} from "@material-ui/core";
import {FC, useEffect} from "react";
import {VideoControls} from "../../../components/VideoControls";
import {IVideoConfig, IVideoControls, useVideo} from "../../../hooks/useVideo";
import {background3} from "../../../theme";

export const Video: FC<{
    src: string;
    width?: number;
    maxWidth?: number;
    volumeControls?: boolean;
    fullscreenControls?: boolean;
    getControls?: (controls: IVideoControls | null) => void;
    onTimeUpdate?: IVideoConfig["onTimeUpdate"];
    className?: string;
}> = ({
    src,
    width: desiredWidth,
    maxWidth,
    volumeControls = true,
    fullscreenControls = true,
    getControls,
    onTimeUpdate,
    className,
}) => {
    const {Video, controls} = useVideo({
        src,
        muted: !volumeControls,
        onTimeUpdate,
    });

    useEffect(() => {
        getControls?.(controls);
        return () => getControls?.(null);
    }, []);

    return (
        <Box
            width="fit-content"
            css={{
                border: `2px solid ${background3}`,
                width: desiredWidth ?? "100%",
                maxWidth: maxWidth ?? "100%",
            }}
            position="relative"
            overflow="hidden"
            className={className}>
            <Video
                width={desiredWidth}
                css={{
                    maxWidth: "100%",
                    width: desiredWidth ?? "100%",
                    display: "block",
                }}
            />
            <VideoControls
                css={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                }}
                fullScreenToggle={fullscreenControls}
                volumeControls={volumeControls}
                controller={controls}
            />
        </Box>
    );
};
