import React from "react";
import { YStack, XStack, Text, Image, View } from "tamagui";
import { Star } from "@tamagui/lucide-icons";

const AuthorCard = () => {
  return (
    <YStack
      bg="white"
      p="$4"
      br="$6"
      space="$3"
      shadowColor="#000"
      shadowOpacity={0.1}
      shadowOffset={{ width: 0, height: 4 }}
      shadowRadius={8}
      elevation={4}
      alignItems="center"
    >
      {/* Header */}
      <Text
        fontWeight="700"
        color="#0E1111"
        fontSize={18}
        alignSelf="flex-start"
      >
        Instructor
      </Text>

      {/* Profile Image */}
      <View
        width={150}
        height={150}
        br={100}
        overflow="hidden"
        bg="#FFF5EB"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/portrait-young-woman-smiling_23-2148688577.jpg",
          }}
          width={140}
          height={140}
          borderRadius={70}
        />
      </View>

      {/* Name & Title */}
      <YStack alignItems="center" space="$1">
        <Text fontSize={18} fontWeight="700" color="#0E1111">
          Claudia Pruitt
        </Text>
        <Text color="#6E6E8F" fontSize={15}>
          Designing
        </Text>
      </YStack>

      {/* Reviews & Rating */}
      <XStack ai="center" jc="center" space="$3" mt="$2">
        <XStack ai="center" space={4}>
          <Star size={16} color="#F79E1B" fill="#F79E1B" />
          <Text color="#6E6E8F" fontSize={14}>
            215,475 Reviews
          </Text>
        </XStack>
        <View
          bg="#F1F1F4"
          px="$2"
          py={2}
          br="$3"
        >
          <Text fontSize={13} color="#0E1111" fontWeight="600">
            4.8 Rating
          </Text>
        </View>
      </XStack>

      {/* Students & Courses */}
      <XStack jc="center" space="$3" mt="$2">
        <Text color="#6E6E8F" fontSize={14}>
          616,029 Students
        </Text>
        <Text color="#0E1111" fontSize={14} fontWeight="700">
          15 Courses
        </Text>
      </XStack>

      {/* Bio */}
      <Text
        mt="$3"
        textAlign="center"
        color="#5C5C77"
        fontSize={14}
        lineHeight={20}
      >
        John is a brilliant educator, whose life was spent for computer science
        and love of nature.
      </Text>
    </YStack>
  );
};

export default AuthorCard;
