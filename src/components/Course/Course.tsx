import React, { memo } from 'react'
import { View, TouchableOpacity, Image, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { XStack, YStack, Text } from 'tamagui'
import { useNavigation } from '@react-navigation/native'
import { Star } from '@tamagui/lucide-icons'
import Currency from '../../Utilities/Currency'

const Course = ({ course, isDark, style }) => {
  const { _id, category, title, featuredImage, instructor, rated, sale, price } = course
  const { navigate } = useNavigation()
  const gradientColors = ['#FFD700', '#C49000']

  const scaleAnim = new Animated.Value(1)

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      useNativeDriver: true,
      speed: 20,
      bounciness: 6,
    }).start()
  }

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 6,
    }).start()
  }

  const InnerCard = () => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={{paddingVertical:10}}
      onPress={() => navigate('SingleCourseeScreen', { data: course })}
    >
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }],
          width: 190,
          borderRadius: 18,
          backgroundColor: isDark ? '#111' : '#fff',
          padding: 10,
          shadowColor: '#00000033',
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 2 },
          elevation: 10,
          ...style,
        }}
      >
        {/* Image with overlay gradient */}
        <View style={{ borderRadius: 12, overflow: 'hidden' }}>
          <Image
            source={{ uri: featuredImage }}
            style={{ width: '100%', height: 100 }}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.6)']}
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: 40,
              justifyContent: 'flex-end',
              padding: 5,
            }}
          >
            {sale && (
              <View
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: '#FFD700',
                  borderRadius: 6,
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                }}
              >
                <Text fontSize={11} fontWeight="700" color="#000">
                  {sale/100}% OFF
                </Text>
              </View>
            )}
          </LinearGradient>
        </View>

        {/* Title */}
        <Text
          mt={10}
          fontSize={14}
          numberOfLines={2}
          fontWeight="700"
          color={isDark ? '#fff' : '#111'}
        >
          {title}
        </Text>

        {/* Instructor Info */}
        <XStack alignItems="center" mt={6} space="$2">
          <Image
            source={{ uri: instructor?.avatar }}
            style={{ width: 26, height: 26, borderRadius: 26 }}
          />
          <Text fontSize={13} fontWeight="500" color={isDark ? '#ddd' : '#444'}>
            {instructor?.fullName}
          </Text>
        </XStack>

        {/* Price + Rating */}
        <XStack alignItems="center" justifyContent="space-between" mt={10}>
          <YStack>
            <Text fontSize={14} fontWeight="700" color="#C49000">
              <Currency price={price} />
            </Text>
            {sale && (
                <Currency style={{
                  fontSize:12,
                  textDecorationLine:"line-through",
                  color:"#888"
                }} price={sale} />
            )}
          </YStack>

          <XStack alignItems="center">
            <Star fill="#F5C312" strokeWidth={0} size={18} />
            <Text ml={5} fontSize={13} fontWeight="600" color={isDark ? '#fff' : '#000'}>
              {rated}
            </Text>
          </XStack>
        </XStack>
      </Animated.View>
    </TouchableOpacity>
  )

  return isDark ? (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 20,
        padding: 2,
        marginRight: 12,
      }}
    >
      <InnerCard />
    </LinearGradient>
  ) : (
    <View style={{ marginRight: 12 }}>
      <InnerCard />
    </View>
  )
}

export default memo(Course)