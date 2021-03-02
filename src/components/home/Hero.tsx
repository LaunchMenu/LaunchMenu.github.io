import {Box, Typography} from "@material-ui/core";
import React, {FC} from "react";

export const Hero: FC = ({children}) => {
    return (
        <Box
            css={{
                display: "flex",
                flexDirection: "column" as any,
                justifyContent: "center",
            }}>
            <Typography
                variant="h2"
                color="primary"
                css={{
                    alignSelf: "center",
                }}>
                LaunchMenu
            </Typography>
            {children}

            <Typography
                variant="h5"
                css={{
                    alignSelf: "center",
                    color: "gray",
                }}>
                LaunchMenu is an open source utility application similar to
                LaunchBar and Spotlight for Mac.
            </Typography>
        </Box>
    );
};
