import React from "react";
import {AppProps} from "next/app";
import {Layout} from "../components/Layout";
import {ThemeProvider} from "@emotion/react";
import {theme} from "../theme";
import {MuiThemeProvider, StylesProvider} from "@material-ui/core";
import {IIndex} from "../components/sideIndex/Sidebar";

export default function App({Component, pageProps}: AppProps) {
    const nav: IIndex | undefined = (pageProps as IPageIndexProps).index;

    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <MuiThemeProvider theme={theme}>
                    <Layout index={nav}>
                        <Component {...pageProps} />
                    </Layout>
                </MuiThemeProvider>
            </ThemeProvider>
        </StylesProvider>
    );
}

export type IPageIndexProps = {
    index?: IIndex;
};
