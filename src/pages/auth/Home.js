import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import ViewPager from '@react-native-community/viewpager'

import { theme } from '../../theme'
const Scream1Png = require('../../../assets/images/monstagem-pessoas.png')
const Scream2Png = require('../../../assets/images/tela-app-imag.png')

export const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} key={1}>
        <View>
          <Image source={Scream1Png} />
          <Text style={styles.title}>VAMOS JUNTOS</Text>
          <Text style={styles.text}>Com a 2GO você se conecta ao mundo por meio da inteligência de transporte de grupos</Text>
        </View>
        <View key={2}>
          <Image source={Scream2Png} />
          <Text style={styles.title}>MESMOS DESTINOS</Text>
          <Text style={styles.text}>Crie ou entre em grupos de viagens para ir a eventos, shows, reuniões, ao trabalho ou curso diariamente.</Text>
        </View>
      </ViewPager>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  text: {
    textAlign: 'center',
  },
})
