import { View, Text } from 'react-native'
import React from 'react'

const Currency = ({price,style}:{price:number,style?:object}) => {
  return (
    <View>
      <Text style={style}>₹ {price}</Text>
    </View>
  )
}

export default Currency