import React, {FC} from "react";
import {AppProps} from "next/app";
import {Layout} from "../components/Layout";
import {ThemeProvider} from "@emotion/react";
import {theme} from "../theme";
import {CssBaseline, MuiThemeProvider, StylesProvider} from "@material-ui/core";
import {MDXProvider} from "@mdx-js/react";
import {CodeBlock} from "../components/CodeBlock";
import Head from "next/head";

const mdxComponents = {
    code: ({className, children}: {className: string; children: string}) => {
        const languageData = className.match(/language-(.*)/);
        return <CodeBlock code={children} language={languageData?.[1]} />;
    },
};

const App: FC<AppProps> = ({Component, pageProps, router}) => {
    const {route} = router;
    const isGuide = !!route.match(/docs\//);
    console.log(isGuide);

    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <MuiThemeProvider theme={theme}>
                    <MDXProvider components={mdxComponents}>
                        <Layout>
                            <Head>
                                <meta
                                    name="viewport"
                                    content="width=device-width, initial-scale=1.0"
                                />
                            </Head>
                            <Component {...pageProps} />
                        </Layout>
                    </MDXProvider>
                </MuiThemeProvider>
            </ThemeProvider>
        </StylesProvider>
    );
};
export default App;
