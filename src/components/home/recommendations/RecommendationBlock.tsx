import {Box} from "@material-ui/core";
import {FC, ReactNode} from "react";
import {Text} from "../../textStyles/Text";

export const RecommendationBlock: FC<{
    name: ReactNode;
    quote: ReactNode;
    role: ReactNode;
}> = ({name, quote, role}) => {
    return (
        <Box
            flexBasis={1}
            flexGrow={1}
            p={2}
            m={1}
            maxWidth={700}
            flexDirection="column"
            display="flex"
            boxSizing="border-box"
            borderRadius={8}
            css={theme => ({
                backgroundColor: theme.palette.background.default,
                minWidth: `min(100% - ${theme.spacing(1) * 2}px, 250px)`,
            })}>
            <Box mb={2}>
                <Text>{quote}</Text>
            </Box>
            <Box flexGrow={1} />
            <Box>
                <Text>
                    <Box
                        display="inline"
                        fontWeight={800}
                        css={theme => ({color: theme.palette.primary.main})}>
                        {name}
                    </Box>
                    , <Box display="inline">{role}</Box>
                </Text>
            </Box>
        </Box>
    );
};
