import React from 'react'
import { View, Button } from 'react-native'
import styled from 'styled-components/native'
import { node, func } from 'prop-types'

const Wrapper = styled(View)`
  padding-top: 22px;
  flex: 1;
`

const ModalWrapper = ({
  children,
  onPressClose,
}) => (
  <Wrapper>
    <Button
      onPress={onPressClose}
      title="Close"
      style={{ alignSelf: 'flex-end' }}
    />
    {children}
  </Wrapper>
)
ModalWrapper.propTypes = {
  children: node.isRequired,
  onPressClose: func.isRequired,
}

export default ModalWrapper
