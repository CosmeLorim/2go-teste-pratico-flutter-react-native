import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native'

import { ButtonLoginWithGoogle, ButtonLoginWithFacebook } from '../../components/loginButtons'
import { FooterRegister } from '../../components/auth'
import { CustomInput } from '../../components/CustomInput'

const keyPng = require('../../../assets/icons/key.png')
const DividerEndPagePng = require('../../../assets/icons/ou.png')

export const Login = ({ navigation }) => {
  return (
    <>
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
          <FooterRegister navitation={navigation} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
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
})
