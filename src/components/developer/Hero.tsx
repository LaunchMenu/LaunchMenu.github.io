import {Box, Button, Typography} from "@material-ui/core";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Code from "@material-ui/icons/Code";
import {FC} from "react";
import Textfit from "react-textfit";
import {useBodySize} from "../../hooks/useBodySize";
import Link from "next/link";
import {Text} from "../textStyles/Text";

export const Hero: FC = ({children}) => {
    return (
        <Box
            display="flex"
            my={8}
            flexWrap="wrap"
            css={{
                flexDirection: "row-reverse" as any,
                justifyContent: "center",
            }}>
            <Box css={{width: "min(400px, 100%)"}} mb={2} flexShrink={0}>
                <Title />

                <Text
                    css={theme => ({
                        alignSelf: "center",
                        fontWeight: 800,
                        fontSize: 18,
                        marginBottom: theme.spacing(2),
                    })}>
                    Make it. Make it now.
                </Text>
                <Link href="#downloads">
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<LibraryBooks />}>
                        Get started
                    </Button>
                </Link>

                <Box mt={4} mb={2}>
                    <Text>
                        Learn about all the modules available in LaunchMenu:
                    </Text>
                </Box>
                <Link href="/dev">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<Code />}
                        disableElevation>
                        Api overview
                    </Button>
                </Link>
            </Box>
            <Box mr={2} />
            <Box
                flex={1}
                display="flex"
                justifyContent="center"
                css={{minWidth: "min(550px, 100%)"}}>
                <Box>{children}</Box>
            </Box>
        </Box>
    );
};

const Title: FC = () => {
    useBodySize();
    return (
        <Typography
            variant="h1"
            color="primary"
            css={theme => ({
                alignSelf: "center",
                fontSize: 60,
                marginBottom: theme.spacing(2),
            })}>
            <Textfit>LaunchMenu Development</Textfit>
        </Typography>
    );
};
