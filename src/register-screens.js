import React from 'react'
import { Navigation } from 'react-native-navigation';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux'

import {
  AUTH_SCREEN,
  ONBOARDING_SCREEN,
  WAYPOINT_SCREEN,
  VOUCHERS_SCREEN,
  SCAN_QRCODE_SCREEN,
  PROFILE_SCREEN,
  SETTINGS_TAB_SCREEN,
  CLAIM_VOUCHER_SCREEN,
  ANSWER_SURVEY_SCREEN,
} from './navigation'

import AuthScreen from './screens/Auth'
import OnboardingScreen from './screens/Onboarding'
import WaypointScreen from './screens/Waypoint'
import SettingsScreen from './screens/Settings'
import VouchersScreen from './screens/Vouchers'
import ScanQRCodeScreen from './screens/ScanQRCode'
import ProfileScreen from './screens/Profile'
import ClaimVoucherScreen from './screens/ClaimVoucher'
import AnswerSurveyScreen from './screens/AnswerSurvey'

const withProvider = (Component, store, client) => class extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <Component {...this.props} />
      </ApolloProvider>
    )
  }
  }

export default ({ reduxStore, apolloClient }) => {
  const registerWithStores = (name, clazz) => {
    Navigation.registerComponent(name, () => clazz, reduxStore, ({ children, ...props }) => (
      <Provider {...props}>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </Provider>
    ));
  }
  registerWithStores(ONBOARDING_SCREEN, OnboardingScreen)
  registerWithStores(AUTH_SCREEN, AuthScreen)
  registerWithStores(WAYPOINT_SCREEN, WaypointScreen)
  registerWithStores(VOUCHERS_SCREEN, VouchersScreen)
  registerWithStores(SCAN_QRCODE_SCREEN, ScanQRCodeScreen)
  registerWithStores(PROFILE_SCREEN, ProfileScreen)
  registerWithStores(SETTINGS_TAB_SCREEN, SettingsScreen)
  registerWithStores(CLAIM_VOUCHER_SCREEN, ClaimVoucherScreen)
  registerWithStores(ANSWER_SURVEY_SCREEN, AnswerSurveyScreen)
};
