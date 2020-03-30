import React from 'react'
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import { Text } from 'react-native-elements'

import { FooterInvalidCode } from '../../components/auth'

const DividerEndPagePng = require('../../../assets/icons/ou.png')
const FailPng = require('../../../assets/icons/fail.png')

export const ActivationCodeFail = ({ navigation }) => {
  return (
    <>
      <TouchableHighlight style={styles.content} onPress={e => navigation.navigate('ActivationCode')}>
        <>
          <Image source={FailPng} style={styles.imageFail} />
          <Text h1 style={{ marginTop: 20 }}>Código de ativação é inválido</Text>
        </>
      </TouchableHighlight>

      <View style={styles.footerContent}>
        <View style={{ alignItems: 'center' }}>
          <Image source={DividerEndPagePng} style={styles.dividerEndPage} />
        </View>
        <View style={styles.footerViewRegister}>
          <FooterInvalidCode navitation={navigation} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingTop: '25%',
  },
  imageFail: {
    width: 150,
    height: 150,
    alignSelf: 'center',
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
    justifyContent: 'center',
  },
})
