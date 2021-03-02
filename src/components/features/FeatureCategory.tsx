import {Box} from "@material-ui/core";
import {FC, Fragment, ReactNode, useState} from "react";
import TrackVisibility from "react-on-screen";
import {LMVideoProvider} from "../videoService/LMVideoProvider";
import {FeatureContext} from "./FeatureContext";
import {IFeatureStatusData} from "./FeatureStatusWrapper";

export const FeatureCategory: FC<{
    category: string;
    video: string;
}> = ({category, video, children}) => {
    const [selected, select] = useState("");

    return (
        <Box ml={"50%"} mt={"25vh"}>
            <TrackVisibility>
                {({isVisible}) => (
                    <Fragment>
                        <FeatureContext.Provider value={{selected, select}}>
                            <LMVideoProvider src={video} enabled={isVisible}>
                                {children}
                            </LMVideoProvider>
                        </FeatureContext.Provider>
                        <div css={{height: "25vh"}} />
                    </Fragment>
                )}
            </TrackVisibility>
        </Box>
    );
};
