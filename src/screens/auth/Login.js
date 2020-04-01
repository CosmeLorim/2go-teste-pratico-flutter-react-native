import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, AsyncStorage, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { useFormik } from 'formik'
import Axios from 'axios'

import { ButtonLoginWithGoogle, ButtonLoginWithFacebook } from '../../components/loginButtons'
import { FooterRegister } from '../../components/auth'
import { CustomInput } from '../../components/CustomInput'

const keyPng = require('../../../assets/icons/key.png')
const DividerEndPagePng = require('../../../assets/icons/ou.png')
const baseUrl = 'http://192.168.1.110:8080'


export const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: onSubmit({ setLoading,navigation }),
  })

  return (
    <>
      <Text style={styles.title}>FAÇA SEU LOGIN</Text>
      <View style={styles.form}>
        <CustomInput
          value={values.login}
          onChangeText={handleChange('login')}
          icon='user'
          placeholder='E-mail, telefone ou CPF'
          borderTopRounded
        />
        <CustomInput
          value={values.password}
          onChangeText={handleChange('password')}
          icon='password'
          placeholder='Senha'
          style={{ marginTop: 5 }}
          borderBottomRounded
        />
      </View>
      <View style={styles.forgotPasswordView}>
        <Image source={keyPng} style={styles.forgotPasswordImage} />
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </View>
      <View style={styles.loginButtonsView}>
        <ButtonLoginWithGoogle />
        <ButtonLoginWithFacebook />
        <Button
          title='LOGIN'
          onPress={handleSubmit}
          containerStyle={styles.loginBottom}
          loading={loading}
        />
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

const onSubmit = ({ setLoading, navigation }) => async values => {
  setLoading(true)
  const { login, password } = values

  try {
    const { data } = await Axios({
      method: 'POST',
      url: `${baseUrl}/api/v1/users/auth/sign-in`,
      data: {
        login,
        password,
      },
    })

    if (data.success) {
      AsyncStorage.setItem('token', data.token)
      navigation.navigate('Home')
    } else {
      Alert.alert(data.errors[0])
    }
  } catch (error) {
    console.error(error)
    Alert.alert('Estamos com instabilidades, sua requisição não podê ser atendida.')
  }
  setLoading(false)
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
