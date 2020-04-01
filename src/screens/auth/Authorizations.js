import React, { useState } from 'react'
import { StyleSheet, View, Image, AsyncStorage, Alert } from 'react-native'
import { Text, Button } from 'react-native-elements'

import Axios from 'axios'
const baseUrl = 'http://192.168.1.110:8080'

const GpsIcon = require('../../../assets/icons/gps.png')
const SmsIcon = require('../../../assets/icons/notification.png')
const MailIcon = require('../../../assets/icons/sms.png')

export const Authorizations = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Text h1>AUTORIZAÇÕES</Text>

      <Text>
        Queremos que usa experiência com a 2GO seja excelente.
      </Text>
      <Text>
        Para isso Pediremos neste passo as autorizações de acesso ao seu dispositivo.
      </Text>

      <PermisionText icon={GpsIcon} title='GPS para a sua localização' />
      <PermisionText icon={SmsIcon} title='Envio de notificações' />
      <PermisionText icon={MailIcon} title='Envio de e-mails' />

      <Button
        title='AVANÇAR'
        loading={loading}
        onPress={allowedNotifications({ navigation, setLoading })}
      />
    </>
  )
}

const allowedNotifications = ({ navigation, setLoading }) => async e => {
  setLoading(true)
  const token = await AsyncStorage.getItem('token')

  try {
    const { data } = await Axios({
      method: 'POST',
      url: `${baseUrl}/api/v1/users/finalize-registration`,
      data: { allowedNotifications: true, token },
    })

    if (data.success) {
      navigation.navigate('SuccessRegister')
      return setLoading(false)
    } else {
      Alert.alert(data.errors[0])
    }
  } catch (error) {
    console.error(error)
    Alert.alert('Estamos com instabilidades, sua requisição não podê ser atendida.')
  }
  return setLoading(false)
}

const PermisionText = ({ icon, title }) => {
  return (
    <View style={styles.permisionsView}>
      <Image source={icon} style={styles.permisionIcon} />
      <Text style={styles.permisionText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  permisionsView: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  permisionIcon: {
    width: 25,
    height: 25,
  },
  permisionText: {
    paddingLeft: 10,
    color: '#3c99cf',
  },
})
