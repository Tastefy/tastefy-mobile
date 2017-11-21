import React from 'react'
import { View, Text } from 'react-native'
import { shape, string, arrayOf, object, bool, func } from 'prop-types'

const Survey = ({
  loading,
  survey,
}) => (
  <View>
    <Text>{survey.name}</Text>
  </View>
)

Survey.propTypes = {
  survey: shape({
    name: string,
    questions: arrayOf(shape({
      title: string,
      config: object,
    })),
  }),
  loading: bool.isRequired,
}
Survey.defaultProps = {
  survey: null,
}
export default Survey
