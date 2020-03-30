import React from 'react'
import { StyleSheet, View, ImageBackground, Image } from 'react-native'

import { AuthNavigation } from './AuthNavigation'

const imageBackgroundPng = require('../../../assets/images/background.png')
const logoPng = require('../../../assets/images/logo_branca.png')

export const PageAuth = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBackgroundPng} style={styles.imageBackground}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={logoPng} />
          </View>
          <View style={styles.content}>
            <AuthNavigation />
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
    height: '30%',
    width: '100%',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 17,
    marginTop: -41,
    marginBottom: 32,
    marginLeft: 17,
    marginRight: 17,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
})
