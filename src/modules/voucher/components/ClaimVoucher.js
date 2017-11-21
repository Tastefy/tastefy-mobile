import React from 'react'
import { View, Button, Text } from 'react-native'
import { shape, func, string } from 'prop-types'
import styled from 'styled-components/native'

const Wrapper = styled(View)`

`

const ClaimVoucher = ({
  user,
  voucher,
  claimVoucher,
}) => {
  if (!voucher) {
    return (
      <View>
        <Text>Voucher invalido</Text>
      </View>
    )
  }

  if (voucher.status === 'CLAIMED' && voucher.obtainedBy.id === user.id) {
    return (
      <View>
        <Text>Obtido com sucesso!</Text>
      </View>
    )
  }

  if (voucher.status !== 'GENERATED') {
    return (
      <View>
        Voucher já obtido por alguém...
      </View>
    )
  }
  return (
    <Wrapper>
      <Text>{voucher.code}</Text>
      <Text>{voucher.restaurant.name}</Text>
      <Button
        title="Claim"
        onPress={() => claimVoucher(voucher.id)}
      />
    </Wrapper>
  )
}

ClaimVoucher.propTypes = {
  user: shape({
    id: string,
  }),
  voucher: shape({
    id: string,
    code: string,
    status: string,
    restaurant: shape({
      name: string,
    }),
    obtainedBy: shape({
      id: string,
    }),
  }),
  claimVoucher: func.isRequired,
}
ClaimVoucher.defaultProps = {
  user: null,
  voucher: null,
}
export default ClaimVoucher
