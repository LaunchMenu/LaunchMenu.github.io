import {Global} from "@emotion/react";
import {Container} from "@material-ui/core";
import Head from "next/head";
import React, {Component, FC, ReactNode} from "react";
import {Navbar} from "./Navbar";

export const Layout: FC<{children: NonNullable<ReactNode>}> = ({children}) => {
    return (
        <div className="layout">
            {/* metadata */}
            <Head>
                <title>LaunchMenu</title>
                <link rel="icon" href="/logo/logo-icon.ico" />
            </Head>

            {/* Styling */}
            <Global
                styles={{
                    "body, html": {
                        margin: 0,
                        padding: 0,
                        height: "100%",
                        width: "100%"
                    },
                }}></Global>

            {/* Components */}
            <Navbar />

            {children}
        </div>
    );
};
