import {Box, Typography} from "@material-ui/core";
import React, {FC} from "react";

export const Hero: FC<{title: string; description?: string}> = ({
    children,
    title,
    description,
}) => {
    return (
        <Box
            m={4}
            css={{
                display: "flex",
                flexDirection: "column" as any,
                justifyContent: "center",
            }}>
            <Typography
                variant="h2"
                color="primary"
                css={theme => ({
                    alignSelf: "center",
                    marginBottom: theme.spacing(4),
                })}>
                {title}
            </Typography>
            {children}

            <Typography
                variant="h5"
                css={{
                    alignSelf: "center",
                    color: "gray",
                }}>
                {description}
            </Typography>
        </Box>
    );
};
