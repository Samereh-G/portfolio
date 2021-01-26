import 'animate.css/animate.min.css'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import MainScreen from './screens'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainScreen />
    </ThemeProvider>
  )
}

export default App
