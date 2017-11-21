import React from 'react'
import { View, Text } from 'react-native'
import { shape, string, arrayOf, object, bool, any, func } from 'prop-types'
import StepForm from 'storm-step-form/src/components/index'
import { Field } from 'redux-form'
import OptionsCardWidget from '../../widgets/OptionsCard'
import TextInputWidget from '../../widgets/TextInput'

const componenTypeMap = {
  SELECT: OptionsCardWidget,
  TEXT_INPUT: TextInputWidget,
}
const getComponentByType = type => componenTypeMap[type] || TextInputWidget

const Step = ({
  id,
  title,
  type,
  config,
}) => (
  <View style={{ flex: 1 }}>
    <Text>{title}</Text>
    <Field
      name={id}
      component={getComponentByType(type)}
      cardColor="tomato"
      {...config}
    />
  </View>
)
Step.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  type: string.isRequired,
  config: any,
}
Step.defaultProps = {
  config: null,
}

const Survey = ({
  loading,
  survey,
}) => (
  <View style={{ flex: 1 }}>
    <Text>{survey.name}</Text>
    <StepForm
      x={console.log(survey.questions)}
      steps={survey.questions}
      renderStep={Step}
      onFinish={() => {}}
    />
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
