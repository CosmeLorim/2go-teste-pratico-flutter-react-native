import React from 'react'
import { View, Image, TouchableWithoutFeedback, Alert, StyleSheet } from 'react-native'

const facebookIconPng = require('../../../assets/icons/facebook.png')

export const WithFacebook = () => (
  <TouchableWithoutFeedback onPress={e => Alert.alert('TODO: login with Facebook Through Oath')} >
    <View style={styles.root}>
      <Image style={styles.image} source={facebookIconPng} />
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  root: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3b5998',
    padding: 4,
    borderRadius: 3,
  },
  image: {
    width: 35,
    height: 35,
  },
})
