import {Theme} from "@emotion/react";
import {
    makeStyles,
    createStyles,
    Hidden,
    Drawer,
    Box,
    List,
} from "@material-ui/core";
import {Dispatch, FC, SetStateAction, useCallback} from "react";
import {INavItem, NavItem} from "./NavItem";

// ref: https://github.com/TarVK/model-react/blob/master/examples/src/components/AppLayout.tsx
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        drawer: {
            [theme.breakpoints.up("md")]: {
                position: "sticky",
                top: theme.mixins.toolbar.height,
                width: drawerWidth,
                alignSelf: "flex-start",
            },
        },
        appBar: {
            marginLeft: drawerWidth,
            [theme.breakpoints.up("md")]: {
                width: `calc(100% - ${drawerWidth}px)`,
            },
        },
        appBarInner: {
            display: "flex",
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        toolbar: theme.mixins.toolbar,
        version: {
            ...theme.mixins.toolbar,
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(2),
        },
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
                padding: theme.spacing(3),
            },
            ...theme.typography.body1,
        },
    })
);

export const Sidebar: FC<{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    index: IIndex;
}> = ({open, setOpen, index}) => {
    const classes = useStyles();

    const handleDrawerToggle = useCallback(() => setOpen(open => !open), []);

    const drawer = (
        <Box pb={2}>
            <List>
                {index.items.map((item, i) => (
                    <NavItem key={i} item={item} path={index.rootPath} />
                ))}
            </List>
        </Box>
    );

    return (
        <nav className={classes.drawer} aria-label="folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={open}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}>
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Box
                    css={theme => ({
                        backgroundColor: theme.palette.background.default,
                        height: `calc(100vh - ${theme.mixins.toolbar.height}px)`,
                    })}>
                    {drawer}
                </Box>
            </Hidden>
        </nav>
    );
};

export type IIndex = {
    rootPath: string;
    items: INavItem[];
};
