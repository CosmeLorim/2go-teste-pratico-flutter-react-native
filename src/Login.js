import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

import { CustomInput } from './components/CustomInput'

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
          <View style={styles.content}>
            <Text style={styles.title}>FAÇA SEU LOGIN</Text>
            <View style={styles.form}>
              <CustomInput icon='user' placeholder='E-mail, telefone ou CPF' borderTopRounded />
              <CustomInput icon='password' placeholder='Senha' style={{ marginTop: 5 }} borderBottomRounded />
            </View>
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
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    color: 'rgb(167, 167, 167)',
  },
  form: {
    paddingTop: 41,
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
    shadowColor: "#000",
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
    resizeMode: "cover",
  },
})
