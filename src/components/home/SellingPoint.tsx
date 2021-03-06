import React, {FC, ReactNode} from "react";
import {Box} from "@material-ui/core";
import {H3} from "../textStyles/H3";
import {Text} from "../textStyles/Text";

export const SellingPoint: FC<{title: ReactNode; body: ReactNode}> = ({
    title,
    body,
}) => {
    return (
        <Box maxWidth={400} mb={4}>
            <H3
                css={theme => ({
                    alignSelf: "center",
                    color: "rgba(0, 0, 0, 0.75)",
                    marginBottom: theme.spacing(2),
                })}>
                {title}
            </H3>

            <Text
                css={{
                    alignSelf: "center",
                    color: "rgba(0, 0, 0, 0.5)",
                }}>
                {body}
            </Text>
        </Box>
    );
};
