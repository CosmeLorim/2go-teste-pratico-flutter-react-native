import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import { Login } from './Login'
import { Register } from './Register'
import { TermsOfUse } from './TermsOfUse'
import { ActivationCode } from './ActivationCode'
import { ActivationCodeFail } from './ActivationCodeFail'
import { Authorizations } from './Authorizations'
import { SuccessRegister } from './SuccessRegister'

const switchNavigator = createSwitchNavigator({
  Login,
  Register,
  TermsOfUse,
  ActivationCode,
  ActivationCodeFail,
  Authorizations,
  SuccessRegister,
})

export const AuthNavigation = createAppContainer(switchNavigator)
