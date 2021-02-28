import React, {FC} from "react";
import {AppProps} from "next/app";
import {Layout} from "../components/Layout";
import {ThemeProvider} from "@emotion/react";
import {theme} from "../theme";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {MDXProvider} from "@mdx-js/react";
import {CodeBlock} from "../components/CodeBlock";

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
        <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <MDXProvider components={mdxComponents}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MDXProvider>
            </MuiThemeProvider>
        </ThemeProvider>
    );
};
export default App;
