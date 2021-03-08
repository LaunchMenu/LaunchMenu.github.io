import {FC, useContext} from "react";
import {LMVideosContext} from "./LMVideosContext";
import {IVideoComp} from "./LMVideosProvider";

export const LMVideos: IVideoComp = props => {
    const {Video} = useContext(LMVideosContext);
    return <Video {...props} />;
};
