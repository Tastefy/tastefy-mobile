import React from 'react'
import { View, FlatList } from 'react-native'
import { string, shape, arrayOf, func, bool } from 'prop-types'
import VouchersListItem from './VouchersListItem'

const Separator = () => <View style={{ height: 1, width: 100, backgroundColor: '#d3d3d3' }} />

const VouchersList = ({
  vouchers,
  refetch,
  loading,
  answerSurvey,
  presentVoucher,
}) => (
  <FlatList
    data={vouchers}
    renderItem={({ item }) => (
      <VouchersListItem
        voucher={item}
        onPressAnswerSurvey={answerSurvey}
        onPressPresentVoucher={presentVoucher}
      />
    )}
    keyExtractor={item => item.id}
    onRefresh={refetch}
    refreshing={loading}
    ItemSeparatorComponent={() => <Separator faded />}
  />
)

VouchersList.propTypes = {
  vouchers: arrayOf(shape({
    id: string,
    status: string,
    obtainedAt: string,
    restaurant: shape({
      name: string,
    }),
  })),
  refetch: func.isRequired,
  loading: bool.isRequired,
  answerSurvey: func.isRequired,
  presentVoucher: func.isRequired,
}

VouchersList.defaultProps = {
  vouchers: [],
}
export default VouchersList
