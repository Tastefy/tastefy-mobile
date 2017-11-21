import React from 'react'
import { TextInput } from 'react-native'
import reduxFormInterface from '../common/hocs/redux-form-interface'

export default reduxFormInterface(props => <TextInput {...props} style={{ height: 40, width: 200, backgroundColor: '#FFF' }} />)
