import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { useFormik } from 'formik'

import { FooterRegister, FooterLogin } from '../../components/auth'
import { CustomInput } from '../../components/CustomInput'

const DividerEndPagePng = require('../../../assets/icons/ou.png')

export const ForgotPassword = ({ navigation }) => {
  const { handleChange, values } = useFormik({
    initialValues: {
      login: '',
      token: '',
    },
  })

  return (
    <>
      <Text h1>ESQUECI MINHA SENHA</Text>
      <View style={styles.form}>
        <CustomInput
          value={values.login}
          onChangeText={handleChange('login')}
          icon='user'
          placeholder='E-mail, telefone ou CPF'
          borderTopRounded
        />
        <CustomInput
          value={values.token}
          onChangeText={handleChange('token')}
          icon='more'
          secureTextEntry
          placeholder='Inserir token'
          style={{ marginTop: 5 }}
          borderBottomRounded
        />
      </View>

      <Button title='RECUPERAR SENHA' containerStyle={styles.passwordRecoverBottom} />

      <View style={styles.footerContent}>
        <View style={{ alignItems: 'center' }}>
          <Image source={DividerEndPagePng} style={styles.dividerEndPage} />
        </View>
        <View style={styles.footerViewRegister}>
          <FooterLogin navitation={navigation} />
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
  passwordRecoverBottom: {
    marginTop: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#af3200',
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
    justifyContent: 'space-between',
  },
})
