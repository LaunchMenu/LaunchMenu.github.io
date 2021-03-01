import {createContext} from "react";
import {IVideoControls} from "../../hooks/useVideo";

/** A context to manage jumping between sections of the same video */
export const LMVideoContext = createContext<ILMVideoContext>({
    registerTimeListener: () => {},
    setPauseTime: () => {},
});

export type ILMVideoContext = {
    /**
     * A function to register listeners to check the time. Listeners are removed whenever the context changes.
     * Listeners are used rather than passing the time directly in the context, in order to prevent unnecessary updates.
     */
    registerTimeListener: (listener: (time: number) => void) => void;
    /**
     * Sets the time to auto pause the video at
     * @param time The time to pause at
     */
    setPauseTime: (time: number) => void;
    /** The controls for video playback */
    controls?: IVideoControls;
};
