import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { View, Text,  Image } from "tamagui";
import { Menu, Star, BookOpen } from "@tamagui/lucide-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "../../SingleCourse/components/VideoPlayer";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const CoursePlay = () => {
  const [rating] = useState(4.8);


  useEffect(()=>{
   
  },[])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      {/* ======= Header ======= */}
      <LinearGradient
        colors={["#FDE68A", "#F59E0B"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.header}
      >
        <TouchableOpacity>
          <Menu size={24} color="#111827" />
        </TouchableOpacity>
        <Text fontWeight="700" fontSize={18} color="#111827">
          Course Play
        </Text>
        <View width={24} />
      </LinearGradient>

      {/* ======= Content ======= */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 80, paddingBottom: 120 }} 
      >
        {/* ======= Video Section ======= */}
        <View style={styles.videoWrapper}>
          <View style={styles.videoShadow}>
            <VideoPlayer />
          </View>
        </View>

        {/* ======= Course Details ======= */}
        <View px={18} mt={18}>
          <Text fontSize={22} fontWeight="800" color="#111827" mb={6}>
            Mastering AI with React Native
          </Text>

          {/* Rating Section */}
          <View flexDirection="row" alignItems="center" mb={8}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                fill={i < Math.round(rating) ? "#F59E0B" : "#E5E7EB"}
                color={i < Math.round(rating) ? "#F59E0B" : "#E5E7EB"}
              />
            ))}
            <Text ml={8} color="#6B7280">
              {rating.toFixed(1)} Rating
            </Text>
          </View>

          <Text color="#4B5563" lineHeight={22}>
            Learn how to build intelligent mobile apps using React Native and AI
            integration. This course covers APIs, ML models, and UI design for
            smarter apps. Join thousands of learners upgrading their skills today!
          </Text>
        </View>

        {/* ======= Highlight Card ======= */}
        <LinearGradient
          colors={["#FEF3C7", "#FDE68A"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.infoCard}
        >
          <Text fontSize={18} fontWeight="700" color="#78350F" mb={6}>
            🔥 What You’ll Learn
          </Text>
          <Text color="#854D0E" lineHeight={22}>
            • Build advanced AI-powered components {"\n"}
            • Integrate GPT APIs {"\n"}
            • Design smart user interfaces {"\n"}
            • Optimize performance for mobile AI apps
          </Text>
        </LinearGradient>

        {/* ======= Course Info Section ======= */}
        <View px={18} mt={18}>
          <Text fontWeight="700" fontSize={18} color="#111827" mb={10}>
            Course Overview
          </Text>
          <Text color="#4B5563" lineHeight={22}>
            • Introduction to React Native AI {"\n"}
            • Integrating ChatGPT API {"\n"}
            • Building Smart UI Components {"\n"}
            • Deploying your AI-powered App
          </Text>
        </View>

        {/* ======= Instructor Section ======= */}
        <View px={18} mt={26} mb={20}>
          <Text fontWeight="700" fontSize={18} color="#111827" mb={12}>
            Instructor
          </Text>
          <View
            bg="white"
            borderRadius={16}
            flexDirection="row"
            alignItems="center"
            p={12}
            shadowColor="#000"
            shadowOpacity={0.08}
            shadowRadius={6}
          >
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/44.jpg",
              }}
              width={60}
              height={60}
              borderRadius={50}
              mr={12}
            />
            <View flex={1}>
              <Text fontWeight="700" fontSize={16} color="#111827">
                Claudia Pruitt
              </Text>
              <Text color="#6B7280" fontSize={13}>
                Senior AI Developer & Mentor
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* ======= Floating Lessons Button ======= */}
      <TouchableOpacity activeOpacity={0.9} style={styles.floatingButton}>
        <LinearGradient
          colors={["#FBBF24", "#D97706"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.gradientButton}
        >
          <BookOpen size={24} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CoursePlay;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10,
    borderBottomWidth: 0.5,
    borderColor: "#E5E7EB",
  },
  videoWrapper: {
    width: width,
    height: 230,
    backgroundColor: "#000",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  videoShadow: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  infoCard: {
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  floatingButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    borderRadius: 50,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  gradientButton: {
    borderRadius: 50,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
