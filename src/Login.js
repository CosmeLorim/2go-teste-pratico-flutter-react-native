import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableWithoutFeedback, Alert } from 'react-native'

import { ButtonLoginWithGoogle, ButtonLoginWithFacebook } from './components/loginButtons'
import { Register } from './components/authentication'
import { CustomInput } from './components/CustomInput'

const imageBackgroundPng = require('../assets/images/background.png')
const logoPng = require('../assets/images/logo_branca.png')
const keyPng = require('../assets/icons/key.png')
const DividerEndPagePng = require('../assets/icons/ou.png')

export const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBackgroundPng} style={styles.imageBackground}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={logoPng} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>FAÇA SEU LOGIN</Text>
            <View style={styles.form}>
              <CustomInput icon='user' placeholder='E-mail, telefone ou CPF' borderTopRounded />
              <CustomInput icon='password' placeholder='Senha' style={{ marginTop: 5 }} borderBottomRounded />
            </View>
            <View style={styles.forgotPasswordView}>
              <Image source={keyPng} style={styles.forgotPasswordImage} />
              <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </View>
            <View style={styles.loginButtonsView}>
              <ButtonLoginWithGoogle />
              <ButtonLoginWithFacebook />
              <TouchableWithoutFeedback onPress={e => Alert.alert('TODO: make login')}>
                <View style={styles.loginBottom}>
                  <Text style={styles.loginBottomText}>LOGIN</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.footerContent}>
              <View style={{ alignItems: 'center' }}>
                <Image source={DividerEndPagePng} style={styles.dividerEndPage} />
              </View>
              <View style={styles.footerViewRegister}>
                <Register />
              </View>
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
    height: '30%',
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
  forgotPasswordView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: 'rgb(167, 167, 167)',
  },
  forgotPasswordImage: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  loginButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 27,
  },
  loginBottom: {
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#af3200',
  },
  loginBottomText: {
    color: '#fff',
    fontWeight: 'bold'
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
  dividerEndPage: {
    resizeMode: 'contain',
    width: '40%',
  },
  footerContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  footerViewRegister: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
})
