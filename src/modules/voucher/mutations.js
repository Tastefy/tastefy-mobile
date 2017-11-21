import gql from 'graphql-tag'

export const generateVoucher = gql`
  mutation generateVoucher(
    $generatedBy:ID!,
    $prizeId:ID!,
    $restaurantId:ID!,
    $surveyId:ID!
    $code:String!
  ) {
    createVoucher(code:$code, status:GENERATED, generatedById:$generatedBy, prizeId:$prizeId, restaurantId:$restaurantId, surveyId:$surveyId) {
      id
    }
  }
`


export const claimVoucher = gql`
  mutation claimVoucher($clientMutationId:String!, $voucherId:ID!, $userId:ID!, $obtainedAt:DateTime) {
    updateVoucher(input:{
      clientMutationId: $clientMutationId,
      id: $voucherId,
      status: CLAIMED,
      obtainedAt: $obtainedAt,
      obtainedById: $userId
    }) {
      voucher {
        id
        status
        obtainedAt
        obtainedBy {
          id
        }
      }
    }
  }
`
