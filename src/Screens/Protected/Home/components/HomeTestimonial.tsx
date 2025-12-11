import React, { useEffect, useState } from "react";
import { View, FlatList, Image, useWindowDimensions } from "react-native";
import { Text, YStack, XStack } from "tamagui";
import { LinearGradient } from "expo-linear-gradient";
import { Star } from "@tamagui/lucide-icons";
import Utils from "../../../../Utilities/Utilities";
import GradientHeading from "../../../../components/GradientHeading/GradientHeading";
import { TestimonialsGetAllAction } from "../../../../api/testimonial/TestimonialsAction";
import { TestimonialType } from "../../../../api/testimonial/TestimonialType";
import RenderHTML from "react-native-render-html";


const TestimonialCard = ({ item , isDark}) => {
  const linearbackground = isDark ? ["black","black"] : ["#FFD700", "#C08C28"]
  const {_id,featuredImage,content,author,rating,title} = item
    const { width } = useWindowDimensions();

  return (
  <LinearGradient
    colors={["#FFD700", "#C08C28"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.gradientBorder}
  >
    <YStack
      backgroundColor={isDark ? "black" : "white"}
      borderRadius={20}
      padding={15}
      alignItems="center"
      width={300}
    >
      <Text
        fontSize={14}
        textAlign="center"
        lineHeight={22}
        marginBottom={15}
      >
        {title}
      </Text>

      <RenderHTML
        contentWidth={width}
        source={{ html: `<div style="text-align:center;">${item.content}</div>` }}
        baseStyle={{
          fontSize: 15,
          lineHeight: 22,
          textAlign: "center",
          color: "#000"
        }}
      />

      {/* Stars */}
      <XStack space="$1" marginBottom={15}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            color={i < rating ? "#E5A900" : "#DADADA"}
            fill={i < rating ? "#E5A900" : "none"}
            size={15}
          />
        ))}
      </XStack>

      {/* Profile */}
      <XStack alignItems="center" space="$3">
        <Image
          source={{ uri: featuredImage }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 25,
          }}
        />
        <YStack>
          <Text fontWeight="700" fontSize={14}>
            {author}
          </Text>
          <Text color={isDark ? "white" : "#777"} fontSize={12}>
            {item.role}
          </Text>
        </YStack>
      </XStack>
    </YStack>
  </LinearGradient>
)
}

;

const TestimonialList = () => {
    const Utilities = new Utils()
   const isDark = Utilities.isDark()

    const [getInstructors, setgetInstructors] = useState<Partial<TestimonialType>[]>([])
   const [loading, setLoading] = useState(true)
  
   useEffect(() => {
      TestimonialsGetAllAction({
        query: "",
        onSuccess: (res) => {
          setgetInstructors(res)
          setLoading(false)
        }
      })
   }, [])

  return (
     <YStack pt={30} pb={30} px={20} style={{backgroundColor:isDark ? "black" : "white"}}>

       {/* Header */}
      <XStack justifyContent="space-between" alignItems="center">
        <GradientHeading>Testimonials</GradientHeading>
      </XStack>

      <Text color={isDark ?  "white" :"#999"} mt={5}>
        Student/ Instructor feedback
      </Text>

      <FlatList
        data={getInstructors}
        renderItem={({ item }) => <TestimonialCard isDark={isDark} item={item} />}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={{ marginTop:40 }}
      />
    </YStack>
  );
};

const styles = {
  gradientBorder: {
    borderRadius: 20,
    padding: 1,
    marginHorizontal: 6,
  },
};

export default TestimonialList;
