import { Box, Typography } from "@material-ui/core";
import React, {FC} from "react";

export const Hero: FC = () => {
    return (
        <Box css={{
            display: 'flex',
            height: 300,
            flexDirection: 'column' as any,
            justifyContent: 'center'
        }}>
            <Typography variant="h2" color="primary" css={{
                alignSelf: 'center'
            }}>
                LaunchMenu
            </Typography>

            <Typography variant="h5" css={{
                alignSelf: 'center',
                color: 'gray'
            }}>
                LaunchMenu is an open source utility application similar to LaunchBar and Spotlight for Mac.
            </Typography>
        </Box>
    );
}