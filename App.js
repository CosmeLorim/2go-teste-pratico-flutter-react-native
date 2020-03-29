import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import { App } from './src/app'

const theme = {
  colors: {
    primary: '#af3200',
  }
}

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}