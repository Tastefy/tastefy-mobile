import { graphql } from 'react-apollo'
import { compose, withProps } from 'recompose'
import VouchersList from '../components/VouchersList'
import { userVouchersByUserId } from '../queries'
import withCurrentUser from '../../auth/hocs/with-current-user'
import { loadAnswerSurvey } from '../../../navigation'

export default compose(
  withCurrentUser,
  graphql(userVouchersByUserId, {
    options: ({ user }) => ({
      variables: {
        userId: user.id,
      },
    }),
    props: ({ data }) => ({
      vouchers: data.loading ? null : data.viewer && data.viewer.allVouchers.edges.map(edge => edge.node),
      loading: data.loading,
      refetch: data.refetch,
    }),
  }),
  withProps({
    answerSurvey: surveyId => loadAnswerSurvey({ surveyId }),
  }),
)(VouchersList)
