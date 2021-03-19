import {Global} from "@emotion/react";
import {Box, Container} from "@material-ui/core";
import Head from "next/head";
import {FC, Fragment, useState} from "react";
import {Navbar} from "./Navbar";
import {IIndex, Sidebar} from "./sideIndex/Sidebar";

export const Layout: FC<{
    index?: IIndex;
    fullPage?: boolean;
}> = ({children, index, fullPage}) => {
    const [navVisible, setNavVisible] = useState(false);

    const content = (
        <Box display="flex" flexDirection="row">
            {index && (
                <Sidebar
                    index={index}
                    open={navVisible}
                    setOpen={setNavVisible}
                />
            )}

            <Box
                flex={1}
                flexShrink={1}
                css={theme => ({
                    maxWidth: "100%",
                    minWidth: 0,
                    [theme.breakpoints.up("md")]: {
                        paddingLeft: theme.spacing(index ? 2 : 0),
                    },
                })}>
                {children}
            </Box>
        </Box>
    );

    return (
        <div className="layout">
            {/* metadata */}
            <Head>
                <title>LaunchMenu</title>
                <link rel="icon" href="/logo/logo-icon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>

            {/* Styling */}
            <Global
                styles={theme => ({
                    "body, html": {
                        margin: 0,
                        padding: 0,
                        height: "100%",
                        width: "100%",
                        ...(theme.typography.body1 as any),
                    },
                })}></Global>

            {/* Components */}
            <Navbar hasSidebar={!!index} setSidebarOpen={setNavVisible} />

            {fullPage ? content : <Container>{content}</Container>}
        </div>
    );
};
