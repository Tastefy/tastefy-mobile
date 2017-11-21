import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { shape, string } from 'prop-types'

const Wrapper = styled(View)`
  flex: 1;
`
const PresentVoucher = ({
  voucher,
}) => (
  <Wrapper>
    <QRCode
      value={voucher.code}
    />
    <Text>{voucher.code}</Text>
  </Wrapper>
)
PresentVoucher.propTypes = {
  voucher: shape({
    code: string.isRequired,
  }).isRequired,
}
export default PresentVoucher
