import React from 'react'
import { View, TextInput, Button } from 'react-native'

class QRCodeReader extends React.Component {
  state = {
    code: 'MY_SECRET_CODE',
  }
  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, width: 200, backgroundColor: '#d3d3d3' }}
          value={this.state.code}
          onChangeText={code => this.setState({ code })}
        />
        <Button
          onPress={() => this.props.readVoucher(this.state.code)}
          title="Read it"
        />
      </View>
    )
  }
}

export default QRCodeReader
