import {FC, useContext} from "react";
import {LMVideosContext} from "./LMVideosContext";

export const LMVideos: FC<{width?: number}> = ({width}) => {
    const {Video} = useContext(LMVideosContext);
    return <Video width={width} />;
};
