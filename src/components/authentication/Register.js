import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from 'react-native'

export const Register = () => (
  <TouchableWithoutFeedback onPress={e => Alert.alert('TODO: make register...')}>
    <View style={styles.root}>
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.text}>Ainda não possui cadastro?</Text>
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
