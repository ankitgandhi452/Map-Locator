import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
})
  
theme = responsiveFontSizes(theme);

export { theme };

