import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Alert,
  AsyncStorage,
} from 'react-native'
import { useFormik } from 'formik'
import { CheckBox, Button } from 'react-native-elements'

import { ButtonLoginWithGoogle, ButtonLoginWithFacebook } from '../../components/loginButtons'
import { FooterLogin } from '../../components/auth'
import { CustomInput } from '../../components/CustomInput'
import Axios from 'axios'

const baseUrl = 'http://192.168.1.110:8080'

const DividerEndPagePng = require('../../../assets/icons/ou.png')

export const Register = ({ navigation }) => {
  const [acceptedTermsOfUse, setAcceptedTermsOfUse] = useState(false)
  const [loading, setLoading] = useState(false)
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      phone: '',
      email: '',
      password1: '',
      password2: '',
    },
    onSubmit: onSubmit({ setLoading, navigation }),
  })


  return (
    <ScrollView>
      <Text style={styles.title}>FAÇA SEU CADASTRO</Text>

      <View style={styles.formPart1}>
        <CustomInput
          icon='phone'
          value={values.phone}
          onChangeText={handleChange('phone')}
          placeholder='Informe seu celular'
          keyboardType='phone-pad'
          borderTopRounded
        />
        <CustomInput
          icon='mail'
          value={values.email}
          onChangeText={handleChange('mail')}
          placeholder='Informe seu e-mail'
          style={{ marginTop: -1 }}
        />
      </View>
      <View style={styles.formPart2}>
        <CustomInput
          icon='password'
          value={values.password1}
          onChangeText={handleChange('password1')}
          placeholder='Digite sua senha'
        />
        <CustomInput
          value={values.password2}
          onChangeText={handleChange('password2')}
          placeholder='Confirme sua senha'
          style={{ marginTop: -1 }}
          borderBottomRounded
        />
      </View>

      <View style={styles.termsOfUse}>
        <CheckBox
          title='Estou de acordo com os'
          size={20}
          checked={acceptedTermsOfUse}
          onPress={e => setAcceptedTermsOfUse(!acceptedTermsOfUse)}
          textStyle={{ fontSize: 12, marginRight: 0, color: '#afafaf' }}
          checkedColor='#afafaf'
          containerStyle={styles.termsOfUseCheckbox}
        />
        <TouchableWithoutFeedback onPress={e => navigation.navigate('TermsOfuse')}>
          <Text style={{ color: '#cf8466', fontSize: 12, textAlignVertical: 'center' }}> termos de uso</Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.registerButtonsView}>
        <ButtonLoginWithGoogle />
        <ButtonLoginWithFacebook />
        <Button
          type='solid'
          color='primary'
          title='AVANÇAR'
          loading={loading}
          disabled={!acceptedTermsOfUse}
          onPress={handleSubmit}
          containerStyle={{ width: '65%' }}
        />
      </View>

      <View style={styles.footerContent}>
        <View style={{ alignItems: 'center' }}>
          <Image source={DividerEndPagePng} style={styles.dividerEndPage} />
        </View>
        <View style={styles.footerViewRegister}>
          <FooterLogin navitation={navigation} />
        </View>
      </View>

    </ScrollView>
  )
}

const onSubmit = ({ setLoading, navigation }) => async values => {
  setLoading(true)
  const { phone, email, password1: password } = values

  try {
    const { data } = await Axios({
      method: 'POST',
      url: `${baseUrl}/api/v1/users/register`,
      data: {
        phone,
        email,
        password,
      },
    })

    if (data.success) {
      AsyncStorage.setItem('token', data.token)
      navigation.navigate('ActivationCode')
    } else {
      Alert.alert(data.errors[0])
      setLoading(false)
    }
  } catch (error) {
    Alert.alert('Estamos com instabilidades, sua requisição não podê ser atendida.')
    setLoading(false)
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    textAlign: 'center',
    color: 'rgb(167, 167, 167)',
  },
  formPart1: {
    paddingTop: 20,
  },
  formPart2: {
    paddingTop: 14,
  },
  termsOfUse: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 13
  },
  termsOfUseCheckbox: {
    backgroundColor: '#fff',
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    borderWidth: 0,
  },
  registerButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  registerBottomText: {
    color: '#fff',
    fontWeight: 'bold'
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
    justifyContent: 'flex-start',
  },
})
