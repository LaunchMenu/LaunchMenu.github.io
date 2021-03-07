import {FC, ReactNode} from "react";
import {Box} from "@material-ui/core";
import {H3} from "../../textStyles/H3";
import {Text} from "../../textStyles/Text";

export const SellingPoint: FC<{title: ReactNode; body: ReactNode}> = ({
    title,
    body,
}) => {
    return (
        <Box
            flexGrow={1}
            p={1}
            flexBasis={1}
            minWidth="min(100%, 300px)"
            mb={4}>
            <H3
                css={theme => ({
                    marginBottom: theme.spacing(2),
                })}>
                {title}
            </H3>

            <Text>{body}</Text>
        </Box>
    );
};
