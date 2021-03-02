import {Box} from "@material-ui/core";
import {FC, Fragment, useEffect, useRef, useState} from "react";
import TrackVisibility from "react-on-screen";
import {LMVideoProvider} from "../videoService/LMVideoProvider";
import {LMVideos} from "../videoService/LMVideos";

// The LM Video data
const LMWidth = 700;
const LMHeight = 450;
const LMMargin = 18 + 1; // R1 as a margin for error regarding rounding

// The component width
const width = 600;

// Some derived component sizes
const scale = width / (LMWidth - LMMargin * 2);
const height = LMHeight * scale - scale * LMMargin * 2;
const srcWidth = width + scale * LMMargin * 2;

export const FeatureVideo: FC<{initVideo: string; background: string}> = ({
    initVideo,
    background,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    // Rerender the element if the window size changes
    const [, update] = useState(true);
    if (process.browser)
        useEffect(() => {
            const listener = () => update(e => !e);
            window.addEventListener("resize", listener);
            return () => window.removeEventListener("resize", listener);
        });

    // Make the container usually not fixed, for when users don't have js enabled, but set to fixed as soon as js runs
    const [fixed, setFixed] = useState(false);
    useEffect(() => {
        setFixed(true);
    }, []);

    return (
        <div ref={ref} css={{position: "relative", height, width: "100%"}}>
            <TrackVisibility>
                {({isVisible}) => {
                    const rect = ref.current?.getBoundingClientRect();
                    if (!rect) isVisible = true;

                    return (
                        <Fragment>
                            <div
                                css={{
                                    position: fixed ? "fixed" : "relative",
                                    zIndex: 1,
                                    width,
                                    height,
                                    left: isVisible ? "50%" : rect?.left,
                                    transform: isVisible
                                        ? "translate(-50%)"
                                        : "translate(0)",
                                    transition: "left 250ms, transform 250ms",
                                    backgroundColor: "white",
                                    overflow: "hidden",
                                    borderRadius: 20 * scale,
                                    boxShadow:
                                        "0px 0px 30px -5px rgba(0,0,0,0.25)",
                                }}>
                                <div
                                    css={{
                                        margin: -(
                                            (LMMargin * srcWidth) /
                                            LMWidth
                                        ),
                                    }}>
                                    {/* A background picture for when the video is loading   */}

                                    <img
                                        src={background}
                                        width={srcWidth}
                                        css={{
                                            display: "block",
                                            top: -LMMargin * scale,
                                            position: "absolute",
                                            zIndex: -1,
                                        }}
                                    />
                                    <LMVideos width={srcWidth} />
                                </div>
                            </div>

                            <LMVideoProvider
                                src={initVideo}
                                enabled={isVisible}
                            />
                        </Fragment>
                    );
                }}
            </TrackVisibility>
        </div>
    );
};
