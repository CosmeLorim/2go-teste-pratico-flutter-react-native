import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const imageBackground = require('../assets/background.png')

export const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        <Text>Open up App.js to start working on your app!</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    resizeMode: "cover",
    justifyContent: "center"
  },
})
