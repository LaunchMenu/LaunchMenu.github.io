import {createMuiTheme} from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            dark: "#006BBE",
            light: "#0078d4",
            main: "#008DFA",
            contrastText: "#FFFFFF",
        },
        secondary: {
            dark: "#006BBE",
            main: "#0078d4",
            light: "#008DFA",
            contrastText: "#FFFFFF",
        },
        background: {
            default: "#FFFFFF",
            // light: "#FAFAFA",
            // dark: "#EEEEEE",
        },
    },
    breakpoints: {
        values: {
            xs: 400,
            sm: 700,
            md: 1000,
            lg: 1300, // The breakpoint for desktop layout
            xl: 2500,
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
    mixins: {
        toolbar: {
            height: 56,
        },
    },
});
