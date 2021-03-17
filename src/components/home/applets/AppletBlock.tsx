import {Box, Button, CardActionArea} from "@material-ui/core";
import {FC, ReactNode} from "react";
import {PlainLink} from "../../PlainLink";
import {H3} from "../../textStyles/H3";
import {Text} from "../../textStyles/Text";
import {
    FeatureStatusWrapper,
    IFeatureStatusData,
} from "../features/FeatureStatusWrapper";

export const AppletBlock: FC<{
    name: string;
    category?: string;
    description: ReactNode;
    icon: ReactNode;
    status: IFeatureStatusData;
}> = ({name, category, description, icon, status}) => (
    <PlainLink
        href={`/applets/${
            (category ? category + "/" : "") + name.toLowerCase()
        }`}
        css={theme => ({
            margin: theme.spacing(1),
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.palette.background.default,
            borderRadius: 8,
            opacity: getStatus(status) == "longTerm" ? 0.5 : 1,
        })}>
        <CardActionArea
            css={theme => ({
                justifyContent: "start",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                padding: theme.spacing(2),
            })}>
            <Box
                display="flex"
                flexDirection="column"
                textAlign="center"
                alignItems="center">
                <Box
                    display="inline"
                    fontSize={70}
                    css={{svg: {fontSize: "inherit", verticalAlign: "bottom"}}}>
                    {icon}
                </Box>
                <H3
                    css={theme => ({
                        display: "inline-block",
                        marginRight: theme.spacing(4),
                    })}>
                    <FeatureStatusWrapper status={status}>
                        {name}
                    </FeatureStatusWrapper>
                </H3>
                <Box my={2}>
                    <Text>{description}</Text>
                </Box>
                <Box flexGrow={1} />
            </Box>
        </CardActionArea>
    </PlainLink>
);

const getStatus = (status: IFeatureStatusData) =>
    typeof status == "object" ? status.type : status;
