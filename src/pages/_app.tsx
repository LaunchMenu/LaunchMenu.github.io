import React, {Fragment} from "react";
import {Layout} from "../components/Layout";
import {AppProps} from "next/app";
import {ThemeProvider} from "@emotion/react";
import {theme} from "../theme";
import {MuiThemeProvider, StylesProvider} from "@material-ui/core";
import {IIndex} from "../components/sideIndex/Sidebar";
import Head from "next/head";
import {
    CodeReferenceProvider,
    ICodeRefCollection,
} from "../services/mdx/components/CodeReference";

export default function App({Component, pageProps}: AppProps) {
    let nav: IIndex | undefined = (pageProps as IPageIndexProps).index;
    if (nav?.items.length == 0) nav = undefined;

    const codeRef: ICodeRefCollection =
        (pageProps as IPageIndexProps).code ?? {};

    return (
        <Fragment>
            <Head>
                <title>LaunchMenu</title>
                <meta
                    name="description"
                    content="LaunchMenu is a free, cross-platform utility application. Increase your productivity with our keyboard centric design. Join the LaunchMenu community and watch it reach it's full potential."
                    key="description"
                />
                <meta
                    name="keywords"
                    content="OS, Open Source, Utility, Keyboard"
                    key="keywords"
                />

                <meta property="og:title" content="LaunchMenu" key="og-title" />
                <meta property="og:type" content="website" key="og-type" />
                <meta
                    property="og:description"
                    content="LaunchMenu is a free, cross-platform utility application. Increase your productivity with our keyboard centric design. Join the LaunchMenu community and watch it reach it's full potential."
                    key="og-description"
                />
                <meta
                    property="og:image"
                    content="https://launchmenu.github.io/logo/logo-icon.png"
                    key="og-image"
                />
                <meta
                    property="og:image:alt"
                    content="The logo of LaunchMenu"
                    key="og-image-alt"
                />
            </Head>
            <CodeReferenceProvider code={codeRef}>
                <StylesProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <MuiThemeProvider theme={theme}>
                            <Layout index={nav}>
                                <Component {...pageProps} />
                            </Layout>
                        </MuiThemeProvider>
                    </ThemeProvider>
                </StylesProvider>
            </CodeReferenceProvider>
        </Fragment>
    );
}

export type IPageIndexProps = {
    index?: IIndex;
    code?: ICodeRefCollection;
};
