import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import withLoading from '../../common/hocs/with-loading'
import { voucherById } from '../queries'
import PresentVoucher from '../components/PresentVoucher'

export default compose(
  graphql(voucherById, {
    props: ({ data }) => ({
      voucher: data.loading ? null : data.viewer.Voucher,
      loading: data.loading,
    }),
    options: ({ voucherId }) => ({
      variables: {
        voucherId,
      },
    }),
  }),
  withLoading(props => props.loading),
)(PresentVoucher)
