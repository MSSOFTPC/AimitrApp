import React from 'react'
import { Image } from 'react-native'
import { YStack, Text, View } from 'tamagui'
import { LinearGradient } from 'expo-linear-gradient'

const Instructor = ({ instructor }) => {
  const {_id,avatar,createdAt,description,fullName} = instructor
  return (
    <LinearGradient
      colors={['#FFF8E1', '#FFE7A1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 24,
        padding: 3, // gradient border thickness
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:10
      }}
    >
      {/* Inner white container */}
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          overflow: 'hidden',
          width: '100%',
          alignItems: 'center',
          paddingBottom: 20,
        }}
      >
        {/* Instructor Image */}
        <Image
          source={{ uri: avatar }}
          style={{
            width: '100%',
            height: 180,
            resizeMode: 'cover',
          }}
        />

        {/* Gradient Name Tag */}
        <LinearGradient
          colors={['#FFD56F', '#C49000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            position: 'absolute',
            bottom: 12,
            alignSelf: 'center',
            paddingVertical: 6,
            paddingHorizontal: 24,
            borderRadius: 25,
          }}
        >
          <Text
            fontSize={16}
            fontWeight="700"
            color="#fff"
            textAlign="center"
          >
            {instructor.fullName}
          </Text>
        </LinearGradient>
      </View>
    </LinearGradient>
  )
}

export default Instructor
