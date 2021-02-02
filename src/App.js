import 'animate.css/animate.min.css'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
// import MainRoute from './routes/MainRoute'
import MainScreen from './screens/MainScreen'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter> */}
      <CssBaseline />
      <MainScreen />
      {/* </BrowserRouter> */}
    </ThemeProvider>
  )
}

export default App
