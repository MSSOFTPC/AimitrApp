import React from "react";
import { YStack, XStack, Text, Image, View, Separator } from "tamagui";
import { Star } from "@tamagui/lucide-icons";

const reviews = [
  {
    id: 1,
    name: "Farjana Bawnia",
    avatar:
      "https://img.freepik.com/free-photo/portrait-young-handsome-african-man-smiling_23-2148688576.jpg",
    review:
      "At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.",
    rating: 5,
  },
  {
    id: 2,
    name: "Farjana Bawnia",
    avatar:
      "https://img.freepik.com/free-photo/portrait-young-handsome-african-man-smiling_23-2148688576.jpg",
    review:
      "At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.",
    rating: 5,
  },
];

const FeaturedReviewCard = () => {
  return (
    <YStack
      bg="white"
      p="$4"
      br="$6"
      space="$4"
      shadowColor="#000"
      shadowOpacity={0.1}
      shadowOffset={{ width: 0, height: 4 }}
      shadowRadius={8}
      elevation={4}
    >
      {/* Title */}
      <Text fontWeight="700" color="#0E1111" fontSize={18}>
        Featured Review
      </Text>

      {/* Reviews */}
      {reviews.map((item, index) => (
        <YStack key={item.id} space="$3">
          <XStack space="$3">
            {/* Avatar */}
            <Image
              source={{ uri: item.avatar }}
              width={70}
              height={70}
              borderRadius={10}
            />

            {/* Text Info */}
            <YStack flex={1}>
              <Text fontWeight="700" color="#0E1111" fontSize={16}>
                {item.name}
              </Text>

              {/* Stars */}
              <XStack space={2} mt="$1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} color="#F79E1B" fill="#F79E1B" />
                ))}
              </XStack>

              {/* Review */}
              <Text mt="$2" color="#5C5C77" fontSize={14} lineHeight={20}>
                {item.review}
              </Text>
            </YStack>
          </XStack>

          {/* Divider except last */}
          {index !== reviews.length - 1 && (
            <Separator borderColor="#E9E9F1" mt="$2" />
          )}
        </YStack>
      ))}
    </YStack>
  );
};

export default FeaturedReviewCard;
