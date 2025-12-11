import { View, Text } from 'react-native'
import React from 'react'
import GlobalButton from '../../../../components/Button/Button'

const PricingCard = () => {
  return (
    <View>
        <View style={{flexDirection:"row",gap:20}}>
            <Text>$70</Text>
            <Text style={{}}>$120</Text>
        </View>
        <GlobalButton>Buy Now</GlobalButton>
    </View>
  )
}

export default PricingCard