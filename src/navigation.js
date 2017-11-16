import { Navigation } from 'react-native-navigation'
import Feather from 'react-native-vector-icons/Feather'
import { Style } from './resources/style'
import { prepareIcons } from './load-assets'

const PKG_NAME = 'br.com.tastefy'

export const AUTH_SCREEN = `${PKG_NAME}.Auth`
export const ONBOARDING_SCREEN = `${PKG_NAME}.Onboarding`
export const MAIN_SCREEN = `${PKG_NAME}.Main`
export const WAYPOINT_SCREEN = `${PKG_NAME}.Waypoint`
export const FIRST_TAB_SCREEN = `${PKG_NAME}.FirstTab`
export const SECOND_TAB_SCREEN = `${PKG_NAME}.SecondTab`
export const SETTINGS_TAB_SCREEN = `${PKG_NAME}.SettingsTabScreen`

export const loadMainScreen = async () => {
  const icons = await prepareIcons(); //  IMPROVE!
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Vouchers',
        screen: FIRST_TAB_SCREEN,
        title: 'Vouchers',
        icon: icons.award,
      },
      {
        label: 'Escanear',
        screen: SECOND_TAB_SCREEN,
        title: 'Escanear Código',
        icon: icons.camera,
      },
      {
        label: 'Perfil',
        screen: SECOND_TAB_SCREEN,
        title: 'Perfil',
        icon: icons.user,
      },
      {
        label: 'Configurações',
        screen: SETTINGS_TAB_SCREEN,
        title: 'Configurações',
        icon: icons.settings,
      },
    ],
    animationType: 'fade',
    tabsStyle: {
      tabBarButtonColor: Style.tabBarButtonColor,
      tabBarSelectedButtonColor: Style.tabBarSelectedButtonColor,
      tabBarBackgroundColor: Style.tabBarBackgroundColor,
      tabBarLabelColor: Style.tabBarLabelColor,
      tabBarSelectedLabelColor: Style.tabBarSelectedLabelColor,
    },
  });
}

export const loadOnboardingScreen = () => Navigation.startSingleScreenApp({
  screen: {
    screen: ONBOARDING_SCREEN, // unique ID registered with Navigation.registerScreen
  },
  animationType: 'fade', // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});


export const loadAuthScreen = () => Navigation.showModal({
  screen: AUTH_SCREEN,
})

export const loadWaypoint = () => Navigation.startSingleScreenApp({
  screen: {
    screen: WAYPOINT_SCREEN, // unique ID registered with Navigation.registerScreen
  },
  animationType: 'slide-down', // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
