import React, {FC} from "react";
import {AppProps} from "next/app";
import {Layout} from "../components/Layout";
import {ThemeProvider} from "@emotion/react";
import {theme} from "../services/theme";
import {MuiThemeProvider} from "@material-ui/core";

const App: FC<AppProps> = ({Component, pageProps}) => {
    return (
        <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MuiThemeProvider>
        </ThemeProvider>
    );
};
export default App;
