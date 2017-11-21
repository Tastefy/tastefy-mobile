import { graphql } from 'react-apollo'
import { withHandlers } from 'recompose'
import QRCodeReader from '../components/QRCodeReader'

import { voucherByCode } from '../../voucher/queries'
import { claimVoucher } from '../../voucher/mutations'
import { loadClaimVoucher } from '../../../navigation'

export default withHandlers({
  readVoucher: () => (code) => {
    loadClaimVoucher({ code })
  },
})(QRCodeReader)
