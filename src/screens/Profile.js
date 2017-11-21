import React from 'react';
import { Text } from 'react-native'
import ScreenWrapper from 'storm-common/src/components/ScreenWrapper'
import { Style } from '../resources/style'
import QRCode from 'react-native-qrcode-svg'

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
        <QRCode
          value="http://awesome.link.qr"
        />
      </ScreenWrapper>
    )
  }
}

export default Profile
