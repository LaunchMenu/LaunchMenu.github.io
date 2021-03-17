import {Zoom, Box, LinearProgress, IconButton, Slider} from "@material-ui/core";
import {useDataHook} from "model-react";
import {FC, Fragment, useCallback, useRef, useState} from "react";
import {IVideoControls} from "../hooks/useVideo";
import PlayIcon from "@material-ui/icons/PlayArrow";
import VolumeIcon from "@material-ui/icons/VolumeUp";
import FullscreenIcon from "@material-ui/icons/Fullscreen";

const barHeight = 20;
const transition = "250ms ease";
export const VideoControls: FC<{
    className?: string;
    controller: IVideoControls;
    fullScreenToggle?: boolean;
    volumeControls?: boolean;
}> = ({children, className, controller, fullScreenToggle, volumeControls}) => {
    const [h] = useDataHook();
    const duration = controller.gerDuration(h);
    const progress = controller.getTime(h) / duration;
    const buffer = controller.getBuffered(h) / duration;
    const playing = controller.isPlaying(h);
    const volume = controller.getVolume(h);

    // Set time
    const scrubBar = useRef<HTMLDivElement>(null);
    const handleScrub = useCallback(
        (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (scrubBar.current) {
                const bb = scrubBar.current.getBoundingClientRect();
                const x = ev.clientX - bb.left;
                const per = x / bb.width;
                const time = per * duration;
                controller.setTime(time);
            }
        },
        [duration]
    );

    // Whether to extend the control bar
    const barExpandable = fullScreenToggle || volumeControls;
    const [barShown, setBarShown] = useState(false);
    const showBar = useCallback(() => barExpandable && setBarShown(true), []);
    const hideBar = useCallback(() => setBarShown(false), []);
    const extraControlsRef = useRef<HTMLDivElement>(null);

    // Audio controls
    const [volumeShown, setVolumeShown] = useState(false);
    const setVolume = useCallback(
        (evt: any, volume: number) => controller.setVolume(volume / 100),
        []
    );
    const toggleVolume = useCallback(() => setVolumeShown(v => !v), []);
    const hideVolume = useCallback(() => setVolumeShown(false), []);

    // Toggle fullscreen
    const setFullscreen = useCallback(() => {
        controller.setFullscreen();
    }, []);

    return (
        <Box
            css={{pointerEvents: volumeShown ? undefined : "none"}}
            className={className}>
            {children}
            <Box
                display="flex"
                height="100%"
                justifyContent="center"
                alignItems="center"
                onClick={volumeShown ? hideVolume : undefined}
                css={theme => ({
                    color: theme.palette.primary.main,
                    ">*": {
                        position: "absolute",
                    },
                })}>
                <Zoom in={!playing}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius={100}
                        css={theme => ({
                            backgroundColor: "#fff",
                            boxShadow: theme.shadows[4],
                        })}>
                        <PlayIcon css={{fontSize: 60}} />
                    </Box>
                </Zoom>
            </Box>
            {progress > 0 && (
                <Box
                    onMouseEnter={showBar}
                    onMouseLeave={hideBar}
                    css={theme => ({
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: barHeight,
                        pointerEvents: "all",
                        opacity: barShown ? 1 : 0.5,
                        boxShadow: barShown ? theme.shadows[5] : undefined,
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: barShown ? "#ffffff" : "transparent",
                        padding: barShown ? theme.spacing(0.5) : 0,
                        paddingLeft: barShown ? theme.spacing(1) : 0,
                        paddingRight: barShown ? theme.spacing(1) : 0,
                        transition,
                    })}>
                    <div
                        onClick={handleScrub}
                        ref={scrubBar}
                        css={{
                            flexGrow: 1,
                            display: "flex",
                            cursor: "pointer",
                            height: barHeight,
                            justifyContent: "center",
                            flexDirection: "column",
                        }}>
                        <div
                            css={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                height: barShown ? 4 : barHeight,
                                transition,
                            }}>
                            <LinearProgress
                                variant="buffer"
                                value={progress * 100}
                                valueBuffer={buffer * 100}
                                css={{borderRadius: 10}}
                            />
                        </div>
                    </div>
                    <div
                        css={{
                            width: barShown
                                ? extraControlsRef.current?.scrollWidth
                                : 0,
                            transition,
                        }}>
                        <div ref={extraControlsRef} css={{display: "flex"}}>
                            {volumeControls && (
                                <Fragment>
                                    <IconButton
                                        color="primary"
                                        aria-label="Volume"
                                        size="medium"
                                        onClick={toggleVolume}
                                        css={theme => ({
                                            marginLeft: theme.spacing(0.5),
                                            marginRight: theme.spacing(0.5),
                                        })}>
                                        <VolumeIcon />
                                    </IconButton>
                                    <div
                                        css={{
                                            position: "absolute",
                                            bottom: "100%",
                                            height: volumeShown ? 90 : 0,
                                            width: 50,
                                            marginLeft: -8,
                                            display: "flex",
                                            justifyContent: "center",
                                            overflow: "hidden",
                                            transition,
                                        }}>
                                        <div
                                            css={theme => ({
                                                background: "#ffffff",
                                                marginTop: 12,
                                                height: "calc(100% - 12px)",
                                                boxSizing: "border-box",
                                                boxShadow: theme.shadows[5],
                                                paddingTop: theme.spacing(1),
                                                paddingBottom: theme.spacing(2),
                                            })}>
                                            <Slider
                                                orientation="vertical"
                                                value={volume * 100}
                                                onChange={setVolume}
                                                aria-labelledby="vertical-slider"
                                            />
                                        </div>
                                    </div>
                                </Fragment>
                            )}
                            {fullScreenToggle && (
                                <IconButton
                                    color="primary"
                                    aria-label="Fullscreen"
                                    size="medium"
                                    onClick={setFullscreen}
                                    css={theme => ({
                                        marginRight: theme.spacing(0.5),
                                    })}>
                                    <FullscreenIcon />
                                </IconButton>
                            )}
                        </div>
                    </div>
                </Box>
            )}
        </Box>
    );
};
