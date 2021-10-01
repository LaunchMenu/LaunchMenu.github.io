import {Grid} from "@material-ui/core";
import {FC} from "react";

export const HorizontalList: FC<{margin?: number; className?: string}> = ({
    children,
    margin = 0,
    ...rest
}) => (
    <Grid
        container
        justifyContent="space-between"
        direction="row"
        css={theme => ({
            marginTop: theme.spacing(margin),
            marginBottom: theme.spacing(margin),
        })}
        {...rest}>
        {children}
    </Grid>
);
