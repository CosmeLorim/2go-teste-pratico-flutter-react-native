import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from 'react-native'

export const FooterLogin = ({ navitation }) => (
  <TouchableWithoutFeedback onPress={e => navitation.navigate('Login')}>
    <View style={styles.root}>
      <Text style={styles.title}>Efetuar login</Text>
      <Text style={styles.text}>Já possuí senha de acesso?</Text>
    </View>
  </TouchableWithoutFeedback>
)

export const FooterRegister = ({ navitation }) => (
  <TouchableWithoutFeedback onPress={e => navitation.navigate('Register')}>
    <View style={styles.root}>
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.text}>Ainda não possui cadastro?</Text>
    </View>
  </TouchableWithoutFeedback>
)

export const FooterInvalidCode = ({ navitation }) => (
  <TouchableWithoutFeedback onPress={e => navitation.navigate('Register')}>
    <View style={styles.root}>
      <Text style={styles.title}>Voltar para o token</Text>
      <Text style={styles.text}>Você digitou o token errado</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  title: {
    color: '#f06730',
    fontSize: 14,
  },
  text: {
    color: 'rgb(167, 167, 167)',
    fontSize: 10,
  },
})
