import React from 'react'
import { View, Text, Button } from 'react-native'
import styled from 'styled-components/native'
import moment from 'moment'
import { shape, string, func } from 'prop-types'

const Wrapper = styled(View)`

`
const VouchersListItem = ({
  voucher,
  onPressAnswerSurvey,
  onPressPresentVoucher,
}) => (
  <Wrapper>
    <Text>ObtainedAt: {moment(voucher.obtainedAt).format('DD/MM/YYYY')}</Text>
    <Text>Restaurant: {voucher.restaurant.name}</Text>
    <Text>Status: {voucher.status}</Text>
    {voucher.status === 'CLAIMED' &&
      <Button
        title="Responder"
        onPress={() => onPressAnswerSurvey(voucher.id, voucher.survey.id)}
      />
    }
    {voucher.status === 'AVAILABLE' &&
      <Button
        title="Utilizar"
        onPress={() => onPressPresentVoucher(voucher.id)}
      />
    }
  </Wrapper>
)

VouchersListItem.propTypes = {
  voucher: shape({
    id: string,
    status: string,
    obtainedAt: string,
    restaurant: shape({
      name: string,
    }),
    survey: shape({
      id: string,
    }),
  }),
  onPressAnswerSurvey: func.isRequired,
  onPressPresentVoucher: func.isRequired,
}
VouchersListItem.defaultProps = {
  voucher: null,
}
export default VouchersListItem
