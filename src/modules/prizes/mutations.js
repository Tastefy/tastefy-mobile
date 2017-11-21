import gql from 'graphql-tag'

export const createPrize = gql`
  mutation createPrize(
    $imageUrl:String!,
    $name:String!,
    $restaurantId:ID!
  ) {
    createPrize(imageUrl:$imageUrl, name:$name, restaurantId:$restaurantId) {
      id
    }
  }
`
