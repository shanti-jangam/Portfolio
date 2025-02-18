import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#19f3f3",
            light: "#76ffff",
            dark: "#00c0c0",
            contrastText: "#000",
            A100: "#e0ffff",
            A200: "#b2ffff",
            A400: "#80ffff",
            A700: "#4dffff",
        },
        secondary: {
            main: "#fff",
            light: "#ffffff",
            dark: "#cccccc",
            contrastText: "#000",
            A100: "#ffffff",
            A200: "#f2f2f2",
            A400: "#e6e6e6",
            A700: "#d9d9d9",
        },
        error: {
            main: "#f44336",
            light: "#e57373",
            dark: "#d32f2f",
            contrastText: "#fff",
        },
        warning: {
            main: "#ffa726",
            light: "#ffb74d",
            dark: "#f57c00",
            contrastText: "#000",
        },
        info: {
            main: "#2196f3",
            light: "#64b5f6",
            dark: "#1976d2",
            contrastText: "#fff",
        },
        success: {
            main: "#4caf50",
            light: "#81c784",
            dark: "#388e3c",
            contrastText: "#fff",
        },
        background: {
            default: "#f4f4f4",
            paper: "#fff",
        },
        text: {
            primary: "#000",
            secondary: "#666",
            disabled: "#999",
        },
        common: {
            black: "#000000",
            white: "#ffffff",
        },
    },
    typography: {
        fontFamily: '"Rubik", serif',
        h1: {
            fontSize: "2.5rem",
            fontWeight: 600,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 500,
        },
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    [`&.MuiToolbar-root`]: {
                        padding: "0 24px",
                        "@media (min-width: 600px)": {
                            padding: "0 24px",
                        },
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    [`&.MuiContainer-root`]: {
                        padding: 0,
                        margin: 0,
                        maxWidth: "none",
                        width: "100%",
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    padding: "0 24px",
                },
            },
        },
    },
});
