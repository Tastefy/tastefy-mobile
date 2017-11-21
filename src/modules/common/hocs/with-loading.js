import React from 'react'
import { branch, renderComponent } from 'recompose'
import { ActivityIndicator } from 'react-native'

export default loadingCondition => branch(
  loadingCondition,
  renderComponent(ActivityIndicator),
)
