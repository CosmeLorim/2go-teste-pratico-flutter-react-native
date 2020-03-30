import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import { Login } from './Login'
import { Register } from './Register'
import { TermsOfUse } from './TermsOfUse'
import { ActivationCode } from './ActivationCode'
import { ActivationCodeFail } from './ActivationCodeFail'

const switchNavigator = createSwitchNavigator({
  Login,
  Register,
  TermsOfUse,
  ActivationCode,
  ActivationCodeFail,
})

export const AuthNavigation = createAppContainer(switchNavigator)
