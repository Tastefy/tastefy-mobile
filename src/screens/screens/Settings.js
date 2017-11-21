import React from 'react'
import ScreenWrapper from 'storm-common/src/components/ScreenWrapper'
import { Text } from 'react-native'
import { Style } from '../resources/style'

export default class SettingsScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: false,
    navBarTextColor: Style.navBarTextColor,
    navBarBackgroundColor: Style.navBarBackgroundColor,
  }
  render() {
    return (
      <ScreenWrapper>
        <Text>Settigs</Text>
      </ScreenWrapper>
    )
  }
}
