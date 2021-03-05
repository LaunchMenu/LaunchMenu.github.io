import {Box, Typography} from "@material-ui/core";
import {FC, Fragment, useContext, useState} from "react";
import TrackVisibility from "react-on-screen";
import {useIsMobile} from "../../../hooks/useIsMobile";
import {LMVideoContext} from "../videoService/LMVideoContext";
import {LMVideoProvider} from "../videoService/LMVideoProvider";
import {FeatureContext} from "./FeatureContext";
import {FeatureVideoLayout, LMPlayerWidth} from "./FeatureVideo";

export const FeatureCategory: FC<{
    category: string;
    video: string;
}> = ({category, video, children}) => {
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
            <Typography
                variant="h2"
                css={theme => ({
                    fontWeight: 800,
                    fontSize: theme.typography.pxToRem(30),
                })}>
                {category}
            </Typography>
            <Box mt={1} pl={1}>
                {children}
            </Box>
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
                            <FeatureLocalVideo />
                        </section>
                    </LMVideoProvider>
                )}
            </TrackVisibility>
        </Box>
    );
};

const FeatureLocalVideo: FC = () => {
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
            {Video && <FeatureVideoLayout VideoComp={Video} />}
        </Box>
    );
};
