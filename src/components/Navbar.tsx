import React, {Dispatch, FC, SetStateAction} from "react";
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

import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";
import {PlainLink} from "./PlainLink";

const useStyles = makeStyles(theme => ({
    hideMobile: {
        display: "block",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    showMobile: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
        },
    },
}));

const links = {
    home: "/",
    dev: "/developers",
    download: "/#downloads",
    applets: "/#utility-applets",
    docs: "/docs",
    about: "/about",
    github: "https://github.com/LaunchMenu/LaunchMenu",
};

export const Navbar: FC<{
    hasSidebar?: boolean;
    setSidebarOpen?: Dispatch<SetStateAction<boolean>>;
}> = ({hasSidebar, setSidebarOpen}) => {
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
                    <PlainLink href={links.dev}>
                        <ListItemText>
                            <Typography color="primary" variant="h6">
                                Dev
                            </Typography>
                        </ListItemText>
                    </PlainLink>
                </ListItem>
                <ListItem button>
                    <PlainLink href={links.download}>
                        <ListItemText>
                            <Typography color="primary" variant="h6">
                                Download
                            </Typography>
                        </ListItemText>
                    </PlainLink>
                </ListItem>
                <ListItem button>
                    <PlainLink href={links.applets}>
                        <ListItemText>
                            <Typography color="primary" variant="h6">
                                Applets
                            </Typography>
                        </ListItemText>
                    </PlainLink>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <PlainLink href={links.about}>
                        <ListItemText primary="About" />
                    </PlainLink>
                </ListItem>
                <ListItem button>
                    <PlainLink href={links.docs}>
                        <ListItemText primary="Docs" />
                    </PlainLink>
                </ListItem>
                <ListItem button style={{justifyContent: "unset"}}>
                    <PlainLink href={links.github}>
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
                    </PlainLink>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky">
            <Toolbar
                css={theme => ({
                    [theme.breakpoints.down("sm")]: {minHeight: 0},
                })}>
                <Box className={styles.showMobile} style={{width: "100%"}}>
                    <Grid container direction="row" justify="space-between">
                        <Box
                            css={{
                                display: "inline",
                            }}>
                            {hasSidebar && (
                                <Button
                                    color="primary"
                                    onClick={() => setSidebarOpen?.(d => !d)}
                                    css={{height: "100%"}}>
                                    <MenuIcon />
                                </Button>
                            )}
                            <Button color="primary">
                                <PlainLink href={links.home}>
                                    <Typography variant="h5">
                                        LaunchMenu
                                    </Typography>
                                </PlainLink>
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
                                    <PlainLink href={links.home}>
                                        <Typography variant="h5">
                                            LaunchMenu
                                        </Typography>
                                    </PlainLink>
                                </Button>
                                <Button
                                    color="primary"
                                    style={{
                                        marginLeft: 20,
                                    }}>
                                    <PlainLink href={links.dev}>
                                        <Typography variant="h6">
                                            Dev
                                        </Typography>
                                    </PlainLink>
                                </Button>
                                <Button color="primary">
                                    <PlainLink href={links.download}>
                                        <Typography variant="h6">
                                            Download
                                        </Typography>
                                    </PlainLink>
                                </Button>
                                <Button color="primary">
                                    <PlainLink href={links.applets}>
                                        <Typography variant="h6">
                                            Applets
                                        </Typography>
                                    </PlainLink>
                                </Button>
                            </Box>

                            <Box
                                css={{
                                    display: "flex",
                                    flexDirection: "row" as any,
                                }}>
                                <Button color="primary">
                                    <PlainLink href={links.docs}>
                                        <Typography variant="h6">
                                            Docs
                                        </Typography>
                                    </PlainLink>
                                </Button>

                                <Button color="primary">
                                    <PlainLink href={links.about}>
                                        <Typography variant="h6">
                                            About
                                        </Typography>
                                    </PlainLink>
                                </Button>

                                <Button
                                    color="primary"
                                    startIcon={<GitHubIcon />}>
                                    <PlainLink href={links.github}>
                                        <a
                                            target="_blank"
                                            style={{
                                                color: "inherit",
                                                textDecoration: "inherit",
                                            }}>
                                            <Typography variant="h6">
                                                GitHub
                                            </Typography>
                                        </a>
                                    </PlainLink>
                                </Button>
                            </Box>
                        </Grid>
                    </Container>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
