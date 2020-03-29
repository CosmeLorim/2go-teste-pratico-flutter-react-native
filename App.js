import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import { App } from './src/app'
import { theme } from './src/theme'

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}