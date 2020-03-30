import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'

const GpsIcon = require('../../../assets/icons/gps.png')
const SmsIcon = require('../../../assets/icons/notification.png')
const MailIcon = require('../../../assets/icons/sms.png')

export const Authorizations = ({ navigation }) => {
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

      <Button title='AVANÇAR' onPress={e => navigation.navigate('SuccessRegister')} />
    </>
  )
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
