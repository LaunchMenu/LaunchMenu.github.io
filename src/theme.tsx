import {createTheme} from "@material-ui/core/styles";

export const theme = createTheme({
    palette: {
        primary: {
            dark: "#006BBE",
            light: "#0078d4",
            main: "#008DFA", // Should be a hex representation (allows for simple alpha changes)
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

// Really this should be in the theme, but it's too much of a hassle to figure out hwo to properly do this with MUI's theme..
export const background2 = "#FAFAFA";
export const background3 = "#EEEEEE";
