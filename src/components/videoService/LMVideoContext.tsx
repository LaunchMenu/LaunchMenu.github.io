import {createContext, FC} from "react";
import {IVideoControls} from "../../hooks/useVideo";

/** A context to manage jumping between sections of the same video */
export const LMVideoContext = createContext<ILMVideoContext>({
    registerTimeListener: () => () => {},
    setPauseTime: () => {},
});

export type ILMVideoContext = {
    /**
     * A function to register listeners to check the time. Listeners are removed whenever the context changes.
     * The returned function can be used to unregister the listener
     */
    registerTimeListener: (listener: (time: number) => void) => () => void;
    /**
     * Sets the time to auto pause the video at
     * @param time The time to pause at
     */
    setPauseTime: (time: number) => void;
    /** The controls for video playback */
    controls?: IVideoControls | undefined;
    /** The video component to be rendered when using mobile layout (videos aren't shared) */
    Video?: FC<{width?: number}>;
};
