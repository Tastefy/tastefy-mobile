import React from 'react';
import { Style } from '../resources/style'
import { dismissModal } from '../navigation'
import PresentVoucher from '../modules/voucher/containers/PresentVoucher'
import ModalWrapper from '../modules/common/components/ModalWrapper'

class PresentVoucherScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true,
    navBarTextColor: Style.navBarTextColor,
    navBarBackgroundColor: Style.navBarBackgroundColor,
  }

  render() {
    return (
      <ModalWrapper onPressClose={dismissModal}>
        <PresentVoucher
          voucherId={this.props.voucherId}
        />
      </ModalWrapper>
    )
  }
}

export default PresentVoucherScreen
