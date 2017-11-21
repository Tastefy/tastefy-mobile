import gql from 'graphql-tag'

export const voucherByCode = gql`
  query voucherByCode($code:String!) {
    viewer {
      Voucher(code:$code) {
        id
        status
        code
        restaurant {
          name
        }
        obtainedBy {
          id
        }
      }
    }
  }
`
export const voucherById = gql`
  query voucherById($voucherId:ID!) {
    viewer {
      Voucher(id:$voucherId) {
        id
        code
      }
    }
  }
`

export const userVouchersByUserId = gql`
  query userVouchers($userId:ID!){
    viewer {
      allVouchers(filter:{obtainedBy:{id:$userId}}){
        edges {
          node {
            id
            status
            obtainedAt
            code
            survey {
              id
            }
            restaurant {
              name
            }
          }
        }
      }
    }
  }
`
