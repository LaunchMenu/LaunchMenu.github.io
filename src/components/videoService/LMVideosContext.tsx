import {createContext, FC} from "react";
import {IVideoControls} from "../../hooks/useVideo";

/** A context to manage multiple different videos that will show up one at a time in the same element */
export const LMVideosContext = createContext<ILMVideosContext>({
    Video: () => <></>,
    pushVideo: () => {
        throw Error("Context can't  be accessed without a provider");
    },
    popVideo: () => {},
});

export type ILMVideosContext = {
    /** A component that can be used to render an instance of the video */
    Video: FC<{width?: number}>;
    /** A function that can be used to display a new video in all elements */
    pushVideo: (
        src: string,
        onTimeChange: (time: number) => void
    ) => IVideoControls;
    /** A function that can be used to stop displaying a video in all elements */
    popVideo: (src: string) => void;
};
