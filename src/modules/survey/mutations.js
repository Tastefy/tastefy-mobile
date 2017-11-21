import gql from 'graphql-tag'

export const createAnswer = gql`
  mutation createAnswer($questionId:ID!, $userId:ID!, $value:String, $clientMutationId:String!) {
    createAnswer (input:{questionId:$questionId, userId:$userId, value:$value, clientMutationId:$clientMutationId}) {
      answer {
        id
        value
      }
    }
  }
`
