import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  TextInput,
} from 'react-native'
import { Text } from 'react-native-elements'

import { theme } from '../../theme'

import { FooterLogin, FooterRegister, WaitingSms } from '../../components/auth'

const DividerEndPagePng = require('../../../assets/icons/ou.png')

export const ActivationCode = ({ navigation }) => {
  return (
    <>
      <Text h1>CÓDIGO DE ATIVAÇÃO</Text>

      <View style={styles.activationCode}>
        <ActivationCodeInput />
        <ActivationCodeInput />
        <ActivationCodeInput />
        <ActivationCodeInput />
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

const ActivationCodeInput = () => {
  const [value, setValue] = useState('')

  return (
    <View style={activationCodeStyle.root}>
      <TextInput
        keyboardType='phone-pad'
        style={activationCodeStyle.input}
        value={value}
        maxLength={1}
        onChange={v => setValue(v)}
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
    width: 25,
    height: 25,
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
