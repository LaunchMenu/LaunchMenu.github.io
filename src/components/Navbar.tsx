import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    AppBar,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Link from "next/link";

import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
    hideMobile: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    showMobile: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
}));

export const Navbar: FC = () => {
    const styles = useStyles();

    const [state, setState] = React.useState({
        drawer: false,
    });

    const toggleDrawer = (override?: boolean) => (event: any) => {
        setState({...state, drawer: override ?? !state.drawer});
    };

    const drawerList = () => (
        <Box
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{paddingLeft: 20}}>
            <List>
                <ListItem button>
                    <Link href="/applet development">
                        <ListItemText>
                            <Typography color="primary" variant="h6">
                                Dev
                            </Typography>
                        </ListItemText>
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="#download">
                        <ListItemText>
                            <Typography color="primary" variant="h6">
                                Download
                            </Typography>
                        </ListItemText>
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="#applets">
                        <ListItemText>
                            <Typography color="primary" variant="h6">
                                Applets
                            </Typography>
                        </ListItemText>
                    </Link>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <Link href="/about">
                        <ListItemText primary="About" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="/docs">
                        <ListItemText primary="Docs" />
                    </Link>
                </ListItem>
                <ListItem button style={{justifyContent: "unset"}}>
                    <Link href="https://github.com/LaunchMenu/">
                        <a
                            target="_blank"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                        </a>
                    </Link>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <Box className={styles.showMobile} style={{width: "100%"}}>
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
                        </Box>

                        <Box>
                            <Button
                                color="primary"
                                onClick={toggleDrawer()}
                                css={{height: "100%"}}>
                                <MenuIcon />
                            </Button>
                            <Drawer
                                anchor="right"
                                open={state.drawer}
                                onClose={toggleDrawer(false)}>
                                {drawerList()}
                            </Drawer>
                        </Box>
                    </Grid>
                </Box>
                <Box className={styles.hideMobile} style={{width: "100%"}}>
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
                                        <Typography variant="h6">
                                            Dev
                                        </Typography>
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
                                    <Link href="/docs">
                                        <Typography variant="h6">
                                            Docs
                                        </Typography>
                                    </Link>
                                </Button>

                                <Button color="primary">
                                    <Link href="/about">
                                        <Typography variant="h6">
                                            About
                                        </Typography>
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
                                                    style={{
                                                        alignSelf: "center",
                                                    }}
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
                </Box>
            </Toolbar>
        </AppBar>
    );
};
