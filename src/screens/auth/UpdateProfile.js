import React, { useState } from 'react'
import { Text, Button } from 'react-native-elements'
import { useFormik } from 'formik'
import { TouchableWithoutFeedback, Image, ImageBackground, StyleSheet, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import { launchImageLibraryAsync } from 'expo-image-picker'

import { CustomInput } from '../../components/CustomInput'

const ProfilePng = require('../../../assets/icons/profile.png')

const initialValues = {
  name: '',
  dateOfBirth: '',
  cpf: '',
}

export const UpdateProfile = ({ navigation }) => {
  const [profilePick, setProfilePick] = useState({ uri: '' })
  const [loading, setLoading] = useState(false)

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    onSubmit: onSubmit({ navigation, setLoading }),
  })

  return (
    <>
    <Spinner
      visible={loading}
      textContent={'Carregando...'}
    />
      <Text h1>ATUALIZE SEU PERFIL</Text>

      <TouchableWithoutFeedback onPress={getImage({ setProfilePick })}>
        <View style={styles.profileTouchableArea}>
          <ImageBackground source={profilePick} style={styles.profileImageBackground}>
            <Image source={ProfilePng} style={styles.profileImage} />
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.form}>
        <CustomInput
          icon='user'
          onChangeText={handleChange('name')}
          value={values.name}
          placeholder='Nome completo'
          borderTopRounded
        />
        <CustomInput
          icon='gift'
          onChangeText={handleChange('dateOfBirth')}
          value={values.dateOfBirth}
          style={{ marginTop: -1 }}
          placeholder='Data de Nascimento'
          keyboardType='phone-pad'
        />
        <CustomInput
          icon='doc'
          onChangeText={handleChange('cpf')}
          value={values.cpf}
          style={{ marginTop: -1 }}
          placeholder='Digite seu CPF'
          keyboardType='phone-pad'
          borderBottomRounded
        />
      </View>

      <Button title='FINALIZAR' onPress={handleSubmit} />
    </>
  )
}

const onSubmit = ({ navigation, setLoading }) => values => {
  setLoading(true)
  
  setTimeout(() => {
    navigation.navigate('Authorizations')
  }, 1500);
}

const getImage = ({ setProfilePick }) => async () => {
  const profilePick = await launchImageLibraryAsync()
  if (!profilePick.cancelled) {
    console.log('dfa')
    setProfilePick({ uri: profilePick.uri })
  }
}

const styles = StyleSheet.create({
  profileTouchableArea: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 25,
  },
  profileImageBackground: {
    borderRadius: 125 / 2,
    width: 125,
    height: 125,
  },
  profileImage: {
    width: 125,
    height: 125,
  },
  form: {
    paddingBottom: 25,
  },
})
