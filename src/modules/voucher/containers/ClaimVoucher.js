import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import ClaimVoucher from '../components/ClaimVoucher'
import { voucherByCode } from '../queries'
import { claimVoucher } from '../mutations'
import withCurrentUser from '../../auth/hocs/with-current-user'

export default compose(
  withCurrentUser,
  graphql(claimVoucher, {
    props: ({ ownProps: { code, user }, mutate }) => ({
      claimVoucher: (voucherId) => {
        const obtainedAt = new Date()
        mutate({
          variables: {
            voucherId,
            obtainedAt,
            userId: user.id,
            clientMutationId: 'clientMutationId',
          },
          update: (store) => {
            const data = store.readQuery({ query: voucherByCode, variables: { code } })
            data.viewer.Voucher.obtainedById = user.id
            data.viewer.Voucher.obtainedAt = obtainedAt
            store.writeQuery({ query: voucherByCode, data })
          },
        })
      },
    }),
  }),
  graphql(voucherByCode, {
    options: ({ code }) => ({
      variables: {
        code,
      },
    }),
    props: ({ data }) => ({
      voucher: data.loading ? null : data.viewer && data.viewer.Voucher,
      loading: data.loading,
      refetch: data.refetch,
    }),
  }),
)(ClaimVoucher)
