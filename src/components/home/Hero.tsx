import {Box, Button, Typography} from "@material-ui/core";
import CloudDownload from "@material-ui/icons/CloudDownload";
import Code from "@material-ui/icons/Code";
import React, {FC} from "react";
import Textfit from "react-textfit";
import {useBodySize} from "../../hooks/useBodySize";
import Link from "next/link";
import {Text} from "../textStyles/Text";

export const Hero: FC = ({children}) => {
    return (
        <Box
            display="flex"
            my={4}
            flexWrap="wrap"
            css={{
                flexDirection: "row-reverse" as any,
                justifyContent: "center",
            }}>
            <Box css={{maxWidth: "min(400px, 100%)"}} mb={2}>
                <Title />

                <Text
                    css={theme => ({
                        alignSelf: "center",
                        fontWeight: 800,
                        fontSize: 18,
                        marginBottom: theme.spacing(2),
                    })}>
                    Do it. Do it now.
                </Text>
                <Link href="#download">
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<CloudDownload />}>
                        Download
                    </Button>
                </Link>

                <Box mt={4} mb={2}>
                    <Text>
                        LaunchMenu is an open platform, learn about all the
                        features that applets can take advantage of:
                    </Text>
                </Box>
                <Link href="/dev">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<Code />}
                        disableElevation>
                        Applet development
                    </Button>
                </Link>
            </Box>
            <Box flex={1}>{children}</Box>
        </Box>
    );
};

export const Title: FC = () => {
    useBodySize();
    return (
        <Typography
            variant="h1"
            color="primary"
            css={theme => ({
                alignSelf: "center",
                marginBottom: theme.spacing(2),
            })}>
            <Textfit>LaunchMenu</Textfit>
        </Typography>
    );
};
