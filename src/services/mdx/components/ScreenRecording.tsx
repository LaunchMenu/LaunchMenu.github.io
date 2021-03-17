import {Box} from "@material-ui/core";
import {FC, Fragment} from "react";
import {VideoControls} from "../../../components/VideoControls";
import {useVideo} from "../../../hooks/useVideo";
import {ILMSection, LMFrame} from "./ScreenShot";

export const ScreenRecording: FC<{
    src: string;
    width?: number;
    section?: ILMSection;
}> = ({src, width = 700 - 2 * 18, section}) => {
    const {Video, controls} = useVideo({src});
    return (
        <LMFrame width={width} section={section}>
            {srcWidth => (
                <Fragment>
                    <Video width={srcWidth} />
                    <VideoControls
                        css={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            top: 0,
                        }}
                        controller={controls}
                    />
                </Fragment>
            )}
        </LMFrame>
    );
};
