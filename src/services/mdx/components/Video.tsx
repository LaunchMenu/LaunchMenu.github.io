import {Box} from "@material-ui/core";
import {FC} from "react";
import {VideoControls} from "../../../components/VideoControls";
import {useVideo} from "../../../hooks/useVideo";

export const Video: FC<{
    src: string;
    width?: number;
    volumeControls?: boolean;
    fullscreenControls?: boolean;
}> = ({
    src,
    width: desiredWidth,
    volumeControls = true,
    fullscreenControls = true,
}) => {
    // const maxWidth =
    const {Video, controls} = useVideo({src});
    return (
        <Box width="fit-content" position="relative" overflow="hidden">
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
