import React from 'react'
import { View, Text, TextInput } from 'react-native'
import SelectableCard from 'storm-widgets/src/components/SelectableCard'
import Gradient from 'storm-common/src/components/Gradient'
import CardOptions from 'storm-widgets/src/components/CardOptions'
import PictureInput from 'storm-widgets/src/components/PictureInput'
import withImagePicker from 'storm-widgets/src/hocs/image-picker'
import withGraphcoolUpload from 'storm-widgets/src/hocs/graphcool-upload'
import withGetLocation from 'storm-widgets/src/hocs/with-get-location'
import PlacesInput from 'storm-widgets/src/components/PlacesInput'
import { compose } from 'recompose'
import StepForm from 'storm-step-form/src/components'
import { reduxForm, Field } from 'redux-form'
import geocoder from 'react-native-geocoding';

const GEOCODING_API_KEY = 'AIzaSyDCJDhI43QchPtOt7GBWRHy-73rmJpDC8o'
geocoder.setApiKey(GEOCODING_API_KEY)

const SelectLocation = compose(
  withGetLocation,
)(PlacesInput)

const isObject = o => typeof o === 'object'

const SelectLocationWidget = ({
  input,
  ...props
}) => (
  <SelectLocation
    onChange={input.onChange}
    value={isObject(input.value) ? input.value : null}
    {...props}
  />
)
const PictureUpload = compose(
  withImagePicker,
  withGraphcoolUpload({ endpoint: 'https://api.graph.cool/file/v1/ciwo5qv971vqk010114vq4szb' }),
)(PictureInput)

const survey = [{
  id: 'q1',
  title: 'Question 1',
  type: 'optionsCard',
  config: {
    cardColor: 'tomato',
    options: [{
      label: 'Option 1',
      value: 'value 1',
      imageSource: { uri: 'https://unsplash.it/300/300' },
    }, {
      label: 'Option 2',
      value: 'value 2',
      imageSource: { uri: 'https://unsplash.it/300/300' },
    }, {
      label: 'Option 3',
      value: 'value 3',
      imageSource: { uri: 'https://unsplash.it/300/300' },
    }, {
      label: 'Option 4',
      value: 'value 4',
      imageSource: { uri: 'https://unsplash.it/300/300' },
    }],
  },
}, {
  id: 'q2',
  title: 'Question 3',
  type: 'location',
}, {
  id: 'q3',
  title: 'Question 2',
  type: 'text',
  config: {
    maxLength: 100,
  },
}]

const TextWidget = ({
  input: {
    onChange,
    value,
  },
  ...props
}) => (
  <TextInput
    onChangeText={onChange}
    value={value}
    style={{
      backgroundColor: '#FFF',
      height: 40,
      width: 200,
    }}
    {...props}
  />
)

const SelectWidget = ({
  input: {
    onChange,
    value,
  },
  options,
  ...props
}) => (
  <View>
    <Text>Select!</Text>
    {options.map(option => (
      <Text key={option.value}>{option.label}</Text>
    ))}
  </View>
)

const SelectableCardWidget = ({
  input: {
    onChange,
    value,
  },
  imageSource,
}) => (
  <SelectableCard
    imageSource={imageSource}
    color={'tomato'}
    selected={value}
    label={'Uma opção'}
    onChange={onChange}
  />
)

const OptionsCardWidget = ({
  input,
  ...props
}) => (
  <CardOptions
    {...input}
    {...props}
  />
)
const typeToComponentMap = {
  text: TextWidget,
  select: SelectWidget,
  selectableCard: SelectableCardWidget,
  optionsCard: OptionsCardWidget,
  location: SelectLocationWidget,
}

const getComponentFromType = type => typeToComponentMap[type] || null

const SurveyForm = ({
  survey,
}) => (
  <View style={{ flex: 1 }}>
    <StepForm
      steps={survey}
      onFinish={() => alert('finish')}
      renderStep={step => (
        <View key={step.id} style={{ flex: 1 }}>
          <Text>{step.title}</Text>
          <Field
            name={step.id}
            component={getComponentFromType(step.type)}
            {...step.config}
          />
        </View>
      )}
    />
  </View>
)

const FormWithData = reduxForm({
  form: 'survey',
})(SurveyForm)

class WorkSpace extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 22 }}>
        <FormWithData survey={survey} />
      </View>
    )
  }
}
WorkSpace.navigatorStyle = {
  navBarHidden: true,
}
export default WorkSpace
