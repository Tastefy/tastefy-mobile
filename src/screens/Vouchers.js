import React from 'react';
import { Text } from 'react-native'
import ScreenWrapper from 'storm-common/src/components/ScreenWrapper'
import { Style } from '../resources/style'
import { loadAuthScreen } from '../navigation'
import MyVouchers from '../modules/voucher/containers/MyVouchers'

class Vouchers extends React.Component {
  static navigatorStyle = {
    navBarHidden: false,
    navBarTextColor: Style.navBarTextColor,
    navBarBackgroundColor: Style.navBarBackgroundColor,
  }
  render() {
    return (
      <ScreenWrapper style={{ alignItems: 'center', justifyContent: 'center' }}>
        <MyVouchers />
      </ScreenWrapper>
    )
  }
}

export default Vouchers
