import { createMuiTheme } from '@material-ui/core/styles';

export const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#E29973"
        }
    },
    typography: {
        fontFamily: "'Poppins',sans-serif",
        h1: {
            fontSize: "30px",
            color: '#333333',
            fontWeight: '600'
        }
    }

});

