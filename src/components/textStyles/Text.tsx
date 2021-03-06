import {Typography} from "@material-ui/core";
import {FC} from "react";

export const Text: FC<{className?: string}> = props => (
    <Typography variant="body1" {...props} />
);
