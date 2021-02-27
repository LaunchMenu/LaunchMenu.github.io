import React, { FC } from "react";
import { Box, Typography } from "@material-ui/core";

export const SellingPoint: FC<{title: string, body: string}> = ({title, body}) => {
    return (
        <Box width={300} >
            <Typography variant="h5" css={{
                alignSelf: 'center',
                color: 'rgba(0, 0, 0, 0.75)',
                marginBottom: '20px !important'
            }}>
                {title}
            </Typography>

            <Typography variant="body1" css={{
                alignSelf: 'center',
                color: 'rgba(0, 0, 0, 0.5)',
            }}>
                {body}
            </Typography>
        </Box>
    );
}