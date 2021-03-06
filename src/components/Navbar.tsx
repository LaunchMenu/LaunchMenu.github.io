import React, {FC} from "react";

import {AppBar, Grid} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Link from "next/link";

import GitHubIcon from "@material-ui/icons/GitHub";

export const Navbar: FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Container>
                    <Grid container direction="row" justify="space-between">
                        <Box
                            css={{
                                display: "inline",
                            }}>
                            <Button color="primary">
                                <Link href="/">
                                    <Typography variant="h5">
                                        LaunchMenu
                                    </Typography>
                                </Link>
                            </Button>

                            <Button
                                color="primary"
                                style={{
                                    marginLeft: 20,
                                }}>
                                <Link href="/applet development">
                                    <Typography variant="h6">Dev</Typography>
                                </Link>
                            </Button>
                            <Button color="primary">
                                <Link href="#downloads">
                                    <Typography variant="h6">
                                        Download
                                    </Typography>
                                </Link>
                            </Button>
                            <Button color="primary">
                                <Link href="#applets">
                                    <Typography variant="h6">
                                        Applets
                                    </Typography>
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

                            <Button color="primary">
                                <Link href="https://github.com/LaunchMenu/">
                                    <a
                                        target="_blank"
                                        style={{
                                            color: "inherit",
                                            textDecoration: "inherit",
                                        }}>
                                        <Grid
                                            container
                                            direction="row"
                                            style={{gap: 10}}>
                                            <GitHubIcon
                                                style={{alignSelf: "center"}}
                                            />
                                            <Typography variant="h6">
                                                GitHub
                                            </Typography>
                                        </Grid>
                                    </a>
                                </Link>
                            </Button>
                        </Box>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
