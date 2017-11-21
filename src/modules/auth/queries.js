import gql from 'graphql-tag'

export const currentUser = gql`
  query currentUser {
    viewer {
      user {
        id
        email
      }
    }
  }
`
