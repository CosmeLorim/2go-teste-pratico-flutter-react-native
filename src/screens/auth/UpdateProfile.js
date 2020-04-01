import React, { useState } from 'react'
import { Text, Button } from 'react-native-elements'
import { useFormik } from 'formik'
import {
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  AsyncStorage,
  Alert,
} from 'react-native'
import Axios from 'axios'

import { launchImageLibraryAsync } from 'expo-image-picker'

import { CustomInput } from '../../components/CustomInput'

const ProfilePng = require('../../../assets/icons/profile.png')
const baseUrl = 'http://192.168.1.110:8080'

export const UpdateProfile = ({ navigation }) => {
  const [profilePic, setProfilePic] = useState({ uri: '../../../assets/icons/white-block.png' })
  const [loading, setLoading] = useState(false)

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      fullName: '',
      birthDate: '',
      cpf: '',
    },
    onSubmit: onSubmit({ navigation, setLoading, profilePic }),
  })

  return (
    <>
      <Text h1>ATUALIZE SEU PERFIL</Text>

      <TouchableWithoutFeedback onPress={getImage({ setProfilePic })}>
        <View style={styles.profileTouchableArea}>
          <ImageBackground source={profilePic} style={styles.profileImageBackground}>
            <Image source={ProfilePng} style={styles.profileImage} />
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.form}>
        <CustomInput
          icon='user'
          onChangeText={handleChange('fullName')}
          value={values.fullName}
          placeholder='Nome completo'
          borderTopRounded
        />
        <CustomInput
          icon='gift'
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY'
          }}
          onChangeText={handleChange('birthDate')}
          value={values.birthDate}
          style={{ marginTop: -1 }}
          placeholder='Data de Nascimento'
          keyboardType='phone-pad'
        />
        <CustomInput
          icon='doc'
          type='cpf'
          onChangeText={handleChange('cpf')}
          value={values.cpf}
          style={{ marginTop: -1 }}
          placeholder='Digite seu CPF'
          keyboardType='phone-pad'
          borderBottomRounded
        />
      </View>

      <Button title='FINALIZAR' loading={loading} onPress={handleSubmit} />
    </>
  )
}

const onSubmit = ({ navigation, setLoading, profilePic }) => async values => {
  setLoading(true)
  const { fullName, birthDate, cpf } = values
  const token = await AsyncStorage.getItem('token')

  try {
    const { data } = await Axios({
      method: 'POST',
      url: `${baseUrl}/api/v1/users/finalize-registration`,
      data: {
        fullName,
        birthDate: formatDate(birthDate),
        cpf,
        profilePic: profilePic.uri,
        token,
      },
    })

    if (data.success) {
      navigation.navigate('Authorizations')
      return setLoading(false)
    } else {
      Alert.alert(data.errors[0])
    }
  } catch (error) {
    console.error(error)
    Alert.alert('Estamos com instabilidades, sua requisição não podê ser atendida.')
  }
  setLoading(false)
}

const formatDate = date => {
  const dateSplit = date.split('/')
  return `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`
}

const getImage = ({ setProfilePic }) => async () => {
  const profilePic = await launchImageLibraryAsync()
  if (!profilePic.cancelled) {
    setProfilePic({ uri: profilePic.uri })
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
