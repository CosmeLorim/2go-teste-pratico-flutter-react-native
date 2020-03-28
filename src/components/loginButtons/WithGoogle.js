import React from 'react'
import { View, Image, TouchableWithoutFeedback, Alert, StyleSheet } from 'react-native'

const googleIconPng = require('../../../assets/icons/google.png')

export const WithGoogle = () => (
  <TouchableWithoutFeedback onPress={e => Alert.alert('TODO: login with Google Through Oath')} >
    <View style={styles.root}>
      <Image style={styles.image} source={googleIconPng} />
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    padding: 4,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#d2d2d2',
  },
  image: {
    width: 35,
    height: 35,
  },
})
