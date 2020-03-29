import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Image, Text } from 'react-native-elements'

const watchPng = require('../../../assets/icons/fast.png')

export const RegressiveCounter = ({ time, onFinish = () => { } }) => {
  const [timeRemaing, setTimeRemaing] = useState(time)
  useEffect(() => {
    const timer = counter({ timeRemaing, setTimeRemaing, onFinish })

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const { mins, secs } = getRemainingTime(timeRemaing)

  return (
    <View style={styles.root}>
      <Image source={watchPng} style={{ width: 15, height: 15 }} />
      <Text style={styles.text}>{mins}:{secs}</Text>
    </View>
  )
}

const counter = ({ timeRemaing, setTimeRemaing, onFinish }) => {
  if (timeRemaing === 0) return onFinish()

  setTimeRemaing(timeRemaing - 1)
  setTimeout(() => {
    return counter({ timeRemaing: timeRemaing - 1, setTimeRemaing, onFinish })
  }, 1000)
}

const getRemainingTime = time => {
  const mins = Math.floor(time / 60)
  const secs = time - mins * 60
  return { mins: formatNumber(mins), secs: formatNumber(secs) }
}

const formatNumber = number => `0${number}`.slice(-2)

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#3c99cf',
    paddingLeft: 5,
    fontSize: 12,
  },
})
