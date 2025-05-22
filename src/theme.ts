import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#1a1a1a',
        },
        secondary: {
            main: '#white',
        },
    },
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;