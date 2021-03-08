import {Box} from "@material-ui/core";
import {FC, useContext, useState} from "react";
import TrackVisibility from "react-on-screen";
import {useIsMobile} from "../../../hooks/useIsMobile";
import {H2} from "../../textStyles/H2";
import {LMVideoContext} from "../videoService/LMVideoContext";
import {LMVideoProvider} from "../videoService/LMVideoProvider";
import {FeatureContext} from "./FeatureContext";
import {FeatureVideoLayout, LMPlayerWidth} from "./FeatureVideo";

export const FeatureCategory: FC<{
    category: string;
    video: string;
    videoPlaceholder?: string;
}> = ({category, video, children, videoPlaceholder}) => {
    const [selected, select] = useState("");
    const isMobile = useIsMobile();

    const section = (
        <Box
            marginLeft={2}
            marginBottom={2}
            css={theme => ({
                width: "40%",
                [theme.breakpoints.down("md")]: {
                    width: `min(100%, ${LMPlayerWidth}px)`,
                },
            })}>
            <H2>{category}</H2>
            <Box mt={1}>{children}</Box>
        </Box>
    );

    // Return the section wrapped in the video provider and spacing
    return (
        <Box mt="25vh">
            <TrackVisibility>
                {({isVisible}) => (
                    <LMVideoProvider src={video} enabled={isVisible}>
                        <section
                            css={theme => ({
                                paddingBottom: isMobile ? undefined : "25vh",
                                display: "flex",
                                flexDirection: "row-reverse",
                                flexWrap: "wrap",
                                [theme.breakpoints.down("md")]: {
                                    flexDirection: "column",
                                    alignItems: "center",
                                },
                            })}>
                            <FeatureContext.Provider value={{selected, select}}>
                                {section}
                            </FeatureContext.Provider>
                            <FeatureLocalVideo
                                videoPlaceholder={videoPlaceholder}
                            />
                        </section>
                    </LMVideoProvider>
                )}
            </TrackVisibility>
        </Box>
    );
};

const FeatureLocalVideo: FC<{videoPlaceholder?: string}> = ({
    videoPlaceholder,
}) => {
    const {Video} = useContext(LMVideoContext);

    return (
        <Box
            marginBottom={2}
            css={theme => ({
                width: "60%",
                [theme.breakpoints.down("md")]: {
                    width: "inherit",
                },
            })}>
            {Video && (
                <FeatureVideoLayout
                    VideoComp={Video}
                    backgroundSrc={videoPlaceholder}
                />
            )}
        </Box>
    );
};
