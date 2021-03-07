import {Typography} from "@material-ui/core";
import {FC} from "react";
import {ITypographyColor} from "./H1";

export const H2: FC<{
    className?: string;
    color?: ITypographyColor;
}> = ({color, ...props}) => (
    <Typography
        variant="h2"
        css={theme => ({
            fontWeight: 800,
            fontSize: theme.typography.pxToRem(30),
            color: "rgba(0, 0, 0, 0.8)",
        })}
        {...props}
    />
);
