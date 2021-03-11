import {Global} from "@emotion/react";
import {Box} from "@material-ui/core";
import Head from "next/head";
import {FC, useState} from "react";
import {Navbar} from "./Navbar";
import {IIndex, Sidebar} from "./sideIndex/Sidebar";

export const Layout: FC<{
    index?: IIndex;
}> = ({children, index}) => {
    const [navVisible, setNavVisible] = useState(false);

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

            <Box display="flex" flexDirection="row">
                {index && (
                    <Sidebar
                        index={index}
                        open={navVisible}
                        setOpen={setNavVisible}
                    />
                )}

                <Box flex={1}>{children}</Box>
            </Box>
        </div>
    );
};
