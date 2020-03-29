import React, { useState } from 'react'

import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler'

import { RegressiveCounter } from './RegressiveCounter'

export const WaitingSms = ({ navigation }) => {
  const [waitingSms, setwaitingSms] = useState(true)

  if (waitingSms) {
    return (
      <View style={styles.waitingSms}>
        <RegressiveCounter time={120} onFinish={() => setwaitingSms(false)} />
        <Text style={{ width: '50%', fontSize: 12, paddingLeft: 15 }}>Aguarde, estamos te enviando um token</Text>
      </View>
    )
  }

  return (
    <View style={styles.waitingSms}>
      <TouchableHighlight onPress={resendSms({ setwaitingSms, navigation })}>
        <Text style={{ textAlign: 'center', paddingTop: 35 }}>
          Enviar novo token com código de ativação
      </Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  waitingSms: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

const resendSms = ({ setwaitingSms, navigation }) => e => {
  // TODO: Implementar lógica aqui de reenviar o sms
  setwaitingSms(true)
}
