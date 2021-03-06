import {useCallback, useContext, useEffect, useState} from "react";
import {LMVideoContext} from "./LMVideoContext";

export function useLMVideoFragment({
    startTime,
    endTime,
    endMargin = 0.2,
}: {
    /** The start time of the fragment */
    startTime: number;
    /** The end time fo the video fragment */
    endTime: number;
    /** The margin at the end for it to be considered in the section */
    endMargin?: number;
}): {
    /** Whether the video is currently within this fragment */
    inSection: boolean;
    /**
     * Plays from the start section
     * @param pastEnd Whether to continue past the end time
     */
    play: (pastEnd?: boolean) => void;
} {
    const {registerTimeListener, setPauseTime, controls} = useContext(
        LMVideoContext
    );

    // Setup the listener to determine whether we're in the section
    const [inSection, setInSection] = useState(false);
    useEffect(() => {
        let inSection = false;
        return registerTimeListener(time => {
            const shouldBeInSection =
                time >= startTime && time <= endTime + endMargin;
            if (shouldBeInSection != inSection) {
                setInSection(shouldBeInSection);
                inSection = shouldBeInSection;
            }
        });
    }, [startTime, endTime]);

    // Setup the play handler
    const play = useCallback(
        (pastEnd?: boolean) => {
            if (controls) {
                if (!pastEnd) setPauseTime(endTime);
                controls.setTime(startTime);
                controls.play();
            }
        },
        [startTime, endTime, controls]
    );

    return {inSection, play};
}
