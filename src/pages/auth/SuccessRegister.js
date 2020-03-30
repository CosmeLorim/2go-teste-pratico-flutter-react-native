import React, { useEffect } from 'react'
import { Image, StyleSheet, TouchableHighlight } from 'react-native'
import { Text } from 'react-native-elements'


const SuccessPng = require('../../../assets/icons/success.png')

export const SuccessRegister = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 5000);
  }, [])

  return (
    <TouchableHighlight style={styles.content} onPress={e => navigation.navigate('Home')}>
      <>
        <Image source={SuccessPng} style={styles.imageSucess} />
        <Text h1 style={{ marginTop: 20 }}>Cadastro realizado com sucesso</Text>
      </>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingTop: '25%',
  },
  imageSucess: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
})
