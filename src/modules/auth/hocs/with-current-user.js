import { graphql } from 'react-apollo'
import { currentUser } from '../queries'

export default graphql(currentUser, {
  props: ({ data }) => ({
    user: data.loading ? null : data.viewer.user,
    loading: data.loading,
  }),
})
