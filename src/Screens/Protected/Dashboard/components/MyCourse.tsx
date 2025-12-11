import React, { memo } from 'react'
import { YStack, XStack, Text, Image, Button, Card, Slider, Theme } from 'tamagui'
import { Star } from '@tamagui/lucide-icons'

const MyCourse = ({
  image,
  title,
  lessons,
  students,
  reviews,
  rating,
  progress,
}) => {
  return (
      <Card
        elevate
        bordered
        size="$5"
        borderRadius="$8"
        width={"100%"}
        animation="bouncy"
        hoverStyle={{ scale: 1.02 }}
        pressStyle={{ scale: 0.98 }}
        shadowColor="rgba(0,0,0,0.1)"
      >
        <Card.Header p="$4">
          {/* Image */}
          <Image
            source={{ uri: image }}
            width="100%"
            height={180}
            borderRadius="$6"
            mb="$3"
          />

          {/* Rating */}
          <XStack alignItems="center" mb="$2" space="$2">
            <XStack>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star
                  key={i}
                  color={i < rating ? '#f5a623' : '#ccc'}
                  size={18}
                  fill={i < rating ? '#f5a623' : 'transparent'}
                />
              ))}
            </XStack>
            <Text color="$gray10">({reviews} Reviews)</Text>
          </XStack>

          {/* Info */}
          <XStack justifyContent="space-between" mb="$2">
            <Text fontWeight="600">{lessons} Lessons</Text>
            <Text fontWeight="600">{students} Students</Text>
          </XStack>

          {/* Title */}
          <Text fontSize={20} fontWeight="700" mb="$3">
            {title}
          </Text>

          {/* Progress */}
          <XStack justifyContent="space-between" mb="$2">
            <Text color="$gray9">Completed</Text>
            <Text color="$gray9">{progress}%</Text>
          </XStack>

          {/* Slider (Tamagui) */}
          <Slider
            defaultValue={[progress]}
            max={100}
            step={1}
            size="$3"
            disabled
          >
            <Slider.Track backgroundColor="$gray5">
              <Slider.TrackActive backgroundColor="#7ED957" />
            </Slider.Track>
            <Slider.Thumb circular index={0} size="$2" backgroundColor="#7ED957" />
          </Slider>

          {/* Button */}
          <Button
            mt="$4"
            borderRadius="$6"
            size="$4"
            bg="#E0EBFF"
            color="#2C63F5"
            fontWeight="600"
            pressStyle={{ scale: 0.97 }}
            hoverStyle={{ bg: '#d4e3ff' }}
          >
            Download Certificate
          </Button>
        </Card.Header>
      </Card>
  )
}


export default memo(MyCourse)