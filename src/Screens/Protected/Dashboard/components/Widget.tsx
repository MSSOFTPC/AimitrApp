import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import Utils from "../../../../Utilities/Utilities";

const IncomeCard = ({ title, amount }) => {
  const isHovered = useSharedValue(0);
  const Utilities = new Utils()
  const isDark = Utilities.isDark()
  const linearAutoColor = isDark ? ['#FFE7A1', '#fff'] : ['#FFE7A1', '#fff']


  return (
    <LinearGradient
         colors={['#FFE7A1', '#fff']}
         start={{ x: 0.9, y: 0.5 }}
         style={{
           paddingHorizontal: 20,
           paddingTop: 30,
           paddingBottom: 20,
           borderRadius:10
         }}
       >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.amount}>{amount}</Text>
      </LinearGradient>
  );
};

export default IncomeCard;

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 120,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.15,
    elevation: 4,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "#1a1a1a",
    fontWeight: "400",
  },
  amount: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 8,
    color: "#000",
  },
});
