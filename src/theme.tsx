import {createMuiTheme} from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            dark: "#006BBE",
            main: "#0078d4",
            light: "#008DFA",
            contrastText: "#FFFFFF",
        },
        secondary: {
            dark: "#006BBE",
            main: "#0078d4",
            light: "#008DFA",
            contrastText: "#FFFFFF",
        },
    },
    typography: {
        button: {
            textTransform: "none",
        },
    },
    overrides: {
        MuiButton: {
            textPrimary: {
                color: "white",
            },
        },
    },
});
