import {Typography} from "@material-ui/core";
import {FC} from "react";

export const H1: FC<{
    className?: string;
    color?: ITypographyColor;
}> = ({color, ...props}) => (
    <Typography
        variant="h1"
        color="primary"
        css={{
            fontSize: 70,
            color: "rgba(0, 0, 0, 0.8)",
        }}
        {...props}
    />
);

export type ITypographyColor =
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
