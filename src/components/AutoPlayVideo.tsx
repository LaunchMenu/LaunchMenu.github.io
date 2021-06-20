import React, {FC, useCallback, useState} from "react";
import TrackVisibility from "react-on-screen";
import {IVideoControls} from "../hooks/useVideo";
import {Video} from "../services/mdx/components/Video";

export const AutoPlayVideo: FC<{
    src: string;
    width?: number;
    maxWidth?: number;
    volumeControls?: boolean;
    fullscreenControls?: boolean;
    className?: string;
}> = props => {
    const [controls, setControls] = useState<IVideoControls | null>();
    const onTimeUpdate = useCallback(
        (currentTime: number, video: HTMLVideoElement) => {
            if (currentTime >= video.duration) {
                video.currentTime = 0;
                video.play();
            }
        },
        []
    );

    return (
        <TrackVisibility>
            {({isVisible}) => {
                if (controls) {
                    if (isVisible != controls.isPlaying()) controls.play();
                }

                return (
                    <Video
                        {...props}
                        getControls={setControls}
                        onTimeUpdate={onTimeUpdate}
                    />
                );
            }}
        </TrackVisibility>
    );
};
