import React from 'react'
import { StyleSheet, View, Image, TextInput } from 'react-native'

export const CustomInput = props => {
  const {
    icon,
    placeholder,
    borderTopRounded = false,
    borderBottomRounded = false,
    style = StyleSheet.create({})
  } = props
  const styles = getStyles({ borderTopRounded, borderBottomRounded, style })

  const secureTextEntry = icon === 'password'
  const iconPng = getImagePng(icon)

  return (
    <View style={styles.root}>
      <Image source={iconPng} style={styles.icon} />
      <TextInput style={styles.input} secureTextEntry={secureTextEntry} placeholder={placeholder} />
    </View>
  )
}

const getImagePng = (icon) => {
  let iconPng

  switch (icon) {
    case 'user':
      iconPng = require('../../assets/icons/user.png')
      break

    case 'password':
      iconPng = require('../../assets/icons/block.png')
      break

    default:
      iconPng = require('../../assets/icons/white-block.png')
      break
  }

  return iconPng
}

const getStyles = ({ borderTopRounded, borderBottomRounded, style }) => {
  const borderTop = borderTopRounded ? 10 : 0
  const borderBottom = borderBottomRounded ? 10 : 0

  return StyleSheet.create({
    root: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: '#000',
      backgroundColor: '#fff',
      height: 50,
      borderTopStartRadius: borderTop,
      borderTopEndRadius: borderTop,
      borderBottomStartRadius: borderBottom,
      borderBottomEndRadius: borderBottom,
      ...style
    },
    icon: {
      padding: 10,
      marginLeft: 8,
      marginRight: 26,
      height: 30,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    input: {
      width: '100%',
    },
  })
}