import { View, Text } from 'react-native'
import React from 'react'
import { H5 } from 'tamagui'

const Heading = ({title}) => {
  return (
    <View>
      <H5>{title}</H5>
    </View>
  )
}

export default Heading