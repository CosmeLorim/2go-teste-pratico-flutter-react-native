import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'

import {
  StyleSheet,
  View,
  Image,
  TextInput,
} from 'react-native'
import { Text } from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay'

import { theme } from '../../theme'

import { FooterLogin, FooterRegister, WaitingSms } from '../../components/auth'

const DividerEndPagePng = require('../../../assets/icons/ou.png')

export const ActivationCode = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const { handleChange, values } = useFormik({
    initialValues: {
      num1: '',
      num2: '',
      num3: '',
      num4: '',
    },
  })

  useEffect(() => {
    if (!haveEmptyInputs(values)) {
      submitCode({ setLoading, values, navigation })
    }
  }, [values.num1, values.num2, values.num3, values.num4])

  return (
    <>
      <Spinner
        visible={loading}
        textContent={'Verificando código...'}
      />
      <Text h1>CÓDIGO DE ATIVAÇÃO</Text>

      <View style={styles.activationCode}>
        <ActivationCodeInput onChangeText={handleChange('num1')} value={values.num1} />
        <ActivationCodeInput onChangeText={handleChange('num2')} value={values.num2} />
        <ActivationCodeInput onChangeText={handleChange('num3')} value={values.num3} />
        <ActivationCodeInput onChangeText={handleChange('num4')} value={values.num4} />
      </View>

      <Text style={{ textAlign: 'center' }}>
        Você estará recebendo em breve um SMS com o código de ativação
      </Text>

      <View style={styles.regressiveCounter}>
        <WaitingSms />
      </View>

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

const haveEmptyInputs = (values) => {
  for (const label in values) {
    const value = values[label]
    if (value === '') return true
  }
  ''
  return false
}

const submitCode = async ({ setLoading, values, navigation }) => {
  setLoading(true)

  setTimeout(() => {
    if (values.num1 === '0' && values.num2 === '0' && values.num3 === '0' && values.num4 === '0') {
      navigation.navigate('UpdateProfile')
    } else {
      navigation.navigate('ActivationCodeFail')
    }
  }, 1500);
}

const ActivationCodeInput = ({ onChangeText, value }) => {
  return (
    <View style={activationCodeStyle.root}>
      <TextInput
        keyboardType='phone-pad'
        style={activationCodeStyle.input}
        maxLength={1}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}

const activationCodeStyle = StyleSheet.create({
  root: {
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: theme.colors.primary,
  },
  input: {
    textAlign: 'center',
    fontSize: 25
  },
})

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    textAlign: 'center',
    color: 'rgb(167, 167, 167)',
  },
  activationCode: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  regressiveCounter: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
