import React from 'react'
import Camera from 'react-native-camera'
import { View, StyleSheet } from 'react-native'
import { Style } from '../resources/style'
import ScreenWrapper from 'storm-common/src/components/ScreenWrapper'
import ClaimVoucher from '../modules/scan/containers/ClaimVoucher'

const styles = StyleSheet.create({
  preview: {
    flex: 1,
  },
})
class ScanQRCode extends React.Component {
  static navigatorStyle = {
    navBarHidden: false,
    navBarTextColor: Style.navBarTextColor,
    navBarBackgroundColor: Style.navBarBackgroundColor,
  }

  render() {
    return (
      <ScreenWrapper>
        <ClaimVoucher />
      </ScreenWrapper>
    )
  }
}

export default ScanQRCode
