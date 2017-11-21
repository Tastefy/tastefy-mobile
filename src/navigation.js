import { Navigation } from 'react-native-navigation'
import Feather from 'react-native-vector-icons/Feather'
import { Style } from './resources/style'
import { prepareIcons } from './load-assets'

const PKG_NAME = 'br.com.tastefy'

export const AUTH_SCREEN = `${PKG_NAME}.Auth`
export const ONBOARDING_SCREEN = `${PKG_NAME}.Onboarding`
export const MAIN_SCREEN = `${PKG_NAME}.Main`
export const WAYPOINT_SCREEN = `${PKG_NAME}.Waypoint`
export const VOUCHERS_SCREEN = `${PKG_NAME}.Vouchers`
export const SCAN_QRCODE_SCREEN = `${PKG_NAME}.ScanQRCode`
export const PROFILE_SCREEN = `${PKG_NAME}.Profile`
export const SETTINGS_TAB_SCREEN = `${PKG_NAME}.Settings`
export const CLAIM_VOUCHER_SCREEN = `${PKG_NAME}.ClaimVoucher`
export const ANSWER_SURVEY_SCREEN = `${PKG_NAME}.AnswerSurvey`

export const dismissModal = () => Navigation.dismissModal()

export const loadMainScreen = async () => {
  const icons = await prepareIcons(); //  IMPROVE!
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Vouchers',
        screen: VOUCHERS_SCREEN,
        title: 'Vouchers',
        icon: icons.award,
      },
      {
        label: 'Escanear',
        screen: SCAN_QRCODE_SCREEN,
        title: 'Escanear Código',
        icon: icons.camera,
      },
      {
        label: 'Perfil',
        screen: PROFILE_SCREEN,
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

export const loadClaimVoucher = ({ code }) => Navigation.showModal({
  screen: CLAIM_VOUCHER_SCREEN,
  passProps: { code }, // simple serializable object that will pass as props to the modal (optional)
  animationType: 'slide-up', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});

export const loadAnswerSurvey = ({ surveyId }) => Navigation.showModal({
  screen: ANSWER_SURVEY_SCREEN,
  passProps: { surveyId },
  animationType: 'slide-up',
})
