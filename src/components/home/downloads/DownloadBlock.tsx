import {Box, Button} from "@material-ui/core";
import {FC, ReactNode} from "react";
import {H3} from "../../textStyles/H3";
import {Text} from "../../textStyles/Text";
import {
    FeatureStatusWrapper,
    IFeatureStatusData,
} from "../features/FeatureStatusWrapper";

export const DownloadBlock: FC<{
    title: ReactNode;
    status: IFeatureStatusData;
    icon: ReactNode;
    description: ReactNode;
    /** The link to the download */
    download: string;
}> = ({title, status, icon, description, download}) => (
    <Box
        flexGrow={1}
        p={2}
        m={1}
        display="flex"
        flexDirection="column"
        minWidth={300}
        flexBasis={1}
        borderRadius={8}
        css={theme => ({
            backgroundColor: theme.palette.background.default,
        })}>
        <span>
            <FeatureStatusWrapper status={status}>
                <H3 css={{display: "inline-block"}}>{title}</H3>
            </FeatureStatusWrapper>
        </span>
        <Box mt={2} display="flex" justifyContent="center">
            <Box flexGrow={1} maxWidth={200}>
                {icon}
            </Box>
        </Box>
        <Box my={2}>
            <Text>{description}</Text>
        </Box>
        <Box flexGrow={1} />
        <a href={download} css={{textDecoration: "none"}}>
            <Button
                variant="contained"
                css={{display: "block", width: "100%"}}
                disableElevation>
                Download
            </Button>
        </a>
    </Box>
);
