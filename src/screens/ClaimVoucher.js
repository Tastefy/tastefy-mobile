import React from 'react';
import { Text, Button } from 'react-native'
import ScreenWrapper from 'storm-common/src/components/ScreenWrapper'
import { Style } from '../resources/style'
import { dismissModal } from '../navigation'
import ClaimVoucher from '../modules/voucher/containers/ClaimVoucher'

class ClaimVoucherScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true,
    navBarTextColor: Style.navBarTextColor,
    navBarBackgroundColor: Style.navBarBackgroundColor,
  }

  render() {
    return (
      <ScreenWrapper style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={dismissModal}
          title="X"
        />
        <ClaimVoucher
          code={this.props.code}
        />
      </ScreenWrapper>
    )
  }
}

export default ClaimVoucherScreen
