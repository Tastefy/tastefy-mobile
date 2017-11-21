import gql from 'graphql-tag'

export const surveyById = gql`
  query surveyById($surveyId:ID!) {
    viewer {
      Survey(id:$surveyId) {
        name
        questions {
          edges {
            node {
              title
              config
            }
          }
        }
      }
    }
  }
`
