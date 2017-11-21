import React from 'react';
import { Text } from 'react-native'
import ScreenWrapper from 'storm-common/src/components/ScreenWrapper'
import { Style } from '../resources/style'

class Profile extends React.Component {
  static navigatorStyle = {
    navBarHidden: false,
    navBarTextColor: Style.navBarTextColor,
    navBarBackgroundColor: Style.navBarBackgroundColor,
  }

  render() {
    return (
      <ScreenWrapper style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile!</Text>
      </ScreenWrapper>
    )
  }
}

export default Profile
