import React from 'react'
import { StyleSheet, View, Image, TextInput } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

export const CustomInput = props => {
  const {
    onChangeText,
    type,
    options,
    value,
    icon,
    placeholder,
    borderTopRounded = false,
    borderBottomRounded = false,
    style = StyleSheet.create({}),
    secureTextEntry,
    keyboardType,
  } = props
  const styles = getStyles({ borderTopRounded, borderBottomRounded, style })

  const iconPng = getImagePng(icon)
  const Input = type ? TextInputMask : TextInput

  return (
    <View style={styles.root}>
      <Image source={iconPng} style={styles.icon} />
      <Input
        type={type}
        options={options}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
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

    case 'phone':
      iconPng = require('../../assets/icons/smartphone.png')
      break

    case 'email':
      iconPng = require('../../assets/icons/mail.png')
      break

    case 'gift':
      iconPng = require('../../assets/icons/gift.png')
      break

    case 'doc':
      iconPng = require('../../assets/icons/doc.png')
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
      borderWidth: 1,
      borderColor: '#afafaf',
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
      height: 25,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    input: {
      width: '100%',
    },
  })
}
