import React from "react";
import { YStack, XStack, Text, Progress, View } from "tamagui";
import { Star } from "@tamagui/lucide-icons";

const RatingSummaryCard = () => {
  const ratings = [
    { stars: 5, percent: 63 },
    { stars: 4, percent: 29 },
    { stars: 3, percent: 6 },
    { stars: 2, percent: 6 },
    { stars: 1, percent: 6 },
  ];

  return (
    <YStack
      bg="white"
      p="$4"
      br="$4"
      space="$3"
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 4 }}
      shadowOpacity={0.1}
      shadowRadius={8}
      elevation={4}
    >
      {/* Title */}
      <Text fontWeight="700" color="#0E1111" fontSize={18}>
        Review
      </Text>

      {/* Main rating block */}
      <YStack
        bg="#FFF7F0"
        p="$4"
        br="$4"
        alignItems="center"
        justifyContent="center"
        space="$1"
      >
        <Text fontSize={38} fontWeight="800" color="#0E1111">
          5.0
        </Text>

        {/* Stars */}
        <XStack space={2}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} color="#F79E1B" fill="#F79E1B" />
          ))}
        </XStack>

        <Text fontSize={14} color="#F79E1B" fontWeight="600" mt="$1">
          Course Rating
        </Text>
      </YStack>

      {/* Rating breakdown */}
      <YStack space="$3" mt="$2">
        {ratings.map((item, index) => (
          <YStack key={index} space="$1">
            <XStack ai="center" jc="space-between">
              <XStack space={2}>
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={14} color="#F79E1B" fill="#F79E1B" />
                ))}
                {[...Array(5 - item.stars)].map((_, i) => (
                  <Star key={i} size={14} color="#E0E0E0" />
                ))}
              </XStack>

              <Text fontSize={13} color="#5C5C77" fontWeight="600">
                {item.percent}%
              </Text>
            </XStack>

            {/* Progress bar */}
            <View
              bg="#F1F1F1"
              height={6}
              borderRadius={10}
              overflow="hidden"
              width="100%"
            >
              <View
                bg="#F79E1B"
                width={`${item.percent}%`}
                height="100%"
                borderRadius={10}
              />
            </View>
          </YStack>
        ))}
      </YStack>
    </YStack>
  );
};

export default RatingSummaryCard;
