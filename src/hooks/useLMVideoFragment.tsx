export function useLMVideoFragment(config: {
    /** The start time of the fragment */
    startTime: number;
    /** The end time fo the video fragment */
    endTime: number;
}): {
    /** Whether the video is currently within this fragment */
    inSection: boolean;
    /**
     * Plays from the start section
     * @param pastEnd Whether to continue past the end time
     */
    play: (pastEnd?: boolean) => void;
} {
    return {inSection: true, play: () => {}};
}
