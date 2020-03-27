import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

const imageBackground = require('../assets/images/background.png')
const logo = require('../assets/images/logo_branca.png')

export const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={logo} />
          </View>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(71, 71, 71, 0.91)',
    height: 272,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    resizeMode: "cover",
  },
})
