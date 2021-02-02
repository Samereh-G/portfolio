import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import MainScreen from './screens/MainScreen'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainScreen />
    </ThemeProvider>
  )
}

export default App
