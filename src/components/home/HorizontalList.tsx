import {Grid} from "@material-ui/core";
import {FC} from "react";

export const HorizontalList: FC<{margin?: number}> = ({
    children,
    margin = 0,
}) => (
    <Grid
        container
        justify="space-between"
        direction="row"
        css={theme => ({
            marginTop: theme.spacing(margin),
            marginBottom: theme.spacing(margin),
        })}>
        {children}
    </Grid>
);
