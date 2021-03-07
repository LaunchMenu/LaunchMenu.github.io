import {Typography} from "@material-ui/core";
import {FC} from "react";
import {ITypographyColor} from "./H1";

export const H3: FC<{
    className?: string;
    color?: ITypographyColor;
}> = ({color, ...props}) => (
    <Typography
        variant="h3"
        css={{
            fontWeight: 500,
            fontSize: 18,
            color: "rgba(0, 0, 0, 0.8)",
        }}
        {...props}
    />
);
