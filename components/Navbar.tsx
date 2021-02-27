import React, {FC} from "react";

import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Link from "next/link";

export const Navbar: FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Container
                    css={{
                        display: "flex!important",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    <Box
                        css={{
                            display: "inline",
                        }}>
                        <Button color="primary">
                            <Link href="/">
                                <Typography variant="h6">LaunchMenu</Typography>
                            </Link>
                        </Button>
                    </Box>

                    <Box
                        css={{
                            display: "flex",
                            flexDirection: "row" as any,
                            gap: 20,
                        }}>
                        <Button color="primary">
                            <Link href="/devFeatures">
                                <Typography variant="h6">Docs</Typography>
                            </Link>
                        </Button>

                        <Button color="primary">
                            <Link href="/devFeatures">
                                <Typography variant="h6">About</Typography>
                            </Link>
                        </Button>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
