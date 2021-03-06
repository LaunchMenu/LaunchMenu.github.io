import React, {FC} from "react";
import {Box, Typography} from "@material-ui/core";

export const SellingPoint: FC<{title: string; body: string}> = ({
    title,
    body,
}) => {
    return (
        <Box width={300} mb={4}>
            <Typography
                variant="h5"
                css={theme => ({
                    alignSelf: "center",
                    color: "rgba(0, 0, 0, 0.75)",
                    marginBottom: theme.spacing(2),
                })}>
                {title}
            </Typography>

            <Typography
                variant="body1"
                css={{
                    alignSelf: "center",
                    color: "rgba(0, 0, 0, 0.5)",
                }}>
                {body}
            </Typography>
        </Box>
    );
};
