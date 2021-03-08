import {FC, useContext, useEffect, useRef, useState} from "react";
import TrackVisibility from "react-on-screen";
import {useIsMobile} from "../../../hooks/useIsMobile";
import {useBodySize} from "../../../hooks/useBodySize";
import {LMVideoProvider} from "../videoService/LMVideoProvider";
import {LMVideos} from "../videoService/LMVideos";
import {LMVideosContext} from "../videoService/LMVideosContext";
import {useDataHook} from "model-react";
import {getPageRect, IVideoComp} from "../videoService/LMVideosProvider";
import {useTheme} from "@emotion/react";

export const FeatureVideo: FC<{
    initVideo: string;
    videoPlaceholder: string;
    endPadding?: number;
}> = ({initVideo, videoPlaceholder, endPadding = 4}) => {
    const isMobile = useIsMobile();
    const {height, width} = useVideoSizeData();
    const [h] = useDataHook();

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

    // Get the height during which the element should scroll along
    const {getBoundingRect} = useContext(LMVideosContext);
    const theme = useTheme();
    const elRef = useRef<HTMLDivElement>(null);
    let scrollHeight = height;
    if (elRef.current) {
        const thisRect = getPageRect(elRef.current);
        const providerRect = getBoundingRect(h);
        if (providerRect) {
            scrollHeight =
                providerRect.height -
                (thisRect.top - providerRect.top) -
                theme.spacing(endPadding);
        }
    }

    return (
        <div
            ref={elRef}
            css={{
                position: "relative",
                height,
                minWidth: width,
                width: "100%",
            }}>
            <TrackVisibility>
                {({isVisible: isAtTop}) => {
                    if (!fixed || isMobile) isAtTop = true;

                    return (
                        <div
                            css={{
                                position: "absolute",
                                height: scrollHeight,
                                left: 0,
                                right: 0,
                                pointerEvents: "none",
                            }}>
                            <FeatureVideoLayout
                                css={{
                                    top: isMobile ? 0 : 100,
                                    position:
                                        fixed && !isMobile
                                            ? "sticky"
                                            : "relative",
                                    marginLeft: isAtTop ? "50%" : 0,
                                    transform: isAtTop
                                        ? "translate(-50%)"
                                        : "translate(0)",
                                    transition:
                                        "opacity 250ms, margin-left 250ms, transform 250ms, box-shadow 250ms",
                                    boxShadow:
                                        "0px 0px 30px -5px rgba(0,0,0,0.3)",
                                    pointerEvents: "all",
                                }}
                                backgroundSrc={videoPlaceholder}
                                VideoComp={LMVideos}
                            />

                            <LMVideoProvider
                                src={initVideo}
                                enabled={isAtTop}
                                forceRemote
                            />
                        </div>
                    );
                }}
            </TrackVisibility>
        </div>
    );
};

export const FeatureVideoLayout: FC<{
    backgroundSrc?: string;
    className?: string;
    VideoComp: IVideoComp;
}> = ({backgroundSrc, className, children, VideoComp}) => {
    const {width, height, scale, srcWidth} = useVideoSizeData();

    // Make this element hidden from SSR, and smoothly fade in client side
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div
            className={className}
            css={{
                width,
                height,
                zIndex: 1,
                backgroundColor: "white",
                overflow: "hidden",
                borderRadius: 20 * scale,
                opacity: visible ? 1 : 0,
                transition: "opacity 250ms",

                boxShadow: "0px 0px 30px -5px rgba(0,0,0,0.3)",
            }}>
            <div
                css={{
                    margin: -((LMMargin * srcWidth) / LMWidth),
                }}>
                {/* A background picture for when the video is loading   */}

                <VideoComp width={srcWidth} placeholder={backgroundSrc} />
                {children}
            </div>
        </div>
    );
};

// The LM Video data
const LMWidth = 700;
const LMHeight = 450;
const LMMargin = 18 + 1; // R1 as a margin for error regarding rounding

export const LMPlayerWidth = LMWidth - LMMargin * 2; // Real size atm

function useVideoSizeData() {
    const isMobile = useIsMobile();
    const {width: windowWidth} = useBodySize();

    // The component width
    const width =
        isMobile && windowWidth
            ? Math.min(windowWidth - 40, LMPlayerWidth)
            : LMPlayerWidth;

    // Some derived component sizes
    const scale = width / (LMWidth - LMMargin * 2);
    const height = LMHeight * scale - scale * LMMargin * 2;
    const srcWidth = width + scale * LMMargin * 2;

    return {
        width,
        height,
        srcWidth,
        scale,
    };
}
