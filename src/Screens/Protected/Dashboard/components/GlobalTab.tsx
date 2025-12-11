import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const DynamicGradientTabs = ({ tabs = [], tabContents = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderX = useSharedValue(0);
  const tabWidth = (width * 0.85) / tabs.length;

  const handlePress = (index) => {
    setActiveIndex(index);
    sliderX.value = withTiming(index * tabWidth, { duration: 300 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: sliderX.value }],
  }));

  return (
    <View style={styles.wrapper}>
      {/* Tab Header */}
      <View style={[styles.container, { width: width * 0.85 }]}>
        <LinearGradient
          colors={["#fbe57a", "#e8d495", "#d2b785"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.tabBackground}
        />

        {/* Active Slider */}
        <Animated.View
          style={[styles.sliderWrapper, { width: tabWidth }, animatedStyle]}
        >
          <LinearGradient
            colors={["#f5d142", "#b88424"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.slider}
          />
        </Animated.View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            <Pressable key={tab} style={styles.tab} onPress={() => handlePress(index)}>
              <Text
                style={[
                  styles.tabText,
                  { color: activeIndex === index ? "#000" : "#4a4a4a" },
                ]}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Tab Body */}
      <View style={styles.bodyContainer}>
        {tabContents[activeIndex] || (
          <Text style={{ textAlign: "center", color: "#666" }}>
            No content found
          </Text>
        )}
      </View>
    </View>
  );
};

export default DynamicGradientTabs;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  container: {
    height: 55,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    marginBottom: 20,
  },
  tabBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 50,
  },
  sliderWrapper: {
    position: "absolute",
    height: "100%",
  },
  slider: {
    flex: 1,
    borderRadius: 50,
  },
  tabsContainer: {
    flexDirection: "row",
    height: "100%",
    borderRadius: 50,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
  },
  bodyContainer: {
    width: width * 0.85,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
});
