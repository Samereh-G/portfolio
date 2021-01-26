import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000'
    },
    secondary: {
      main: '#f00'
    }
  }
})

export default theme
