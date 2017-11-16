import { Navigation } from 'react-native-navigation';
import { ApolloProvider } from 'react-apollo';
import {
  AUTH_SCREEN,
  ONBOARDING_SCREEN,
  MAIN_SCREEN,
  WAYPOINT_SCREEN,
  FIRST_TAB_SCREEN,
  SECOND_TAB_SCREEN,
  SETTINGS_TAB_SCREEN,
} from './navigation'

import MainScreen from './screens/Main'
import AuthScreen from './screens/Auth'
import OnboardingScreen from './screens/Onboarding'
import WaypointScreen from './screens/Waypoint'
import SettingsScreen from './screens/Settings'

export default ({ reduxStore, apolloClient }) => {
  const registerWithStores = (name, clazz) => {
    Navigation.registerComponent(name, () => clazz, reduxStore, ApolloProvider, { client: apolloClient });
  }
  registerWithStores(ONBOARDING_SCREEN, OnboardingScreen)
  registerWithStores(AUTH_SCREEN, AuthScreen)
  registerWithStores(WAYPOINT_SCREEN, WaypointScreen)
  registerWithStores(MAIN_SCREEN, MainScreen)
  registerWithStores(FIRST_TAB_SCREEN, MainScreen)
  registerWithStores(SECOND_TAB_SCREEN, MainScreen)
  registerWithStores(SETTINGS_TAB_SCREEN, SettingsScreen)
};
