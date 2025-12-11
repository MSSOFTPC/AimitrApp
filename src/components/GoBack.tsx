import { View, Text } from 'react-native'
import React from 'react'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useNavigation } from '@react-navigation/native'
 
const GoBack = () => {
  const {goBack,canGoBack} = useNavigation()

  return (
    <View>
      <ChevronLeft onPress={()=>canGoBack() && goBack?.()} size={24} />
    </View>
  )
}

export default GoBack