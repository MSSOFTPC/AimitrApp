import React from "react";
import { View, Text, StyleSheet, Image, LinearGradient } from "react-native";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import Utils from "../../../../Utilities/Utilities";
import { Star } from "@tamagui/lucide-icons";

const ProfileCard = () => {
  
  return (
    <ExpoLinearGradient
      colors={["#f5d142", "#b88424"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Left: Profile image with badge */}
      <View style={styles.leftSection}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
            }}
            style={styles.image}
          />

          {/* Badge icon */}
          <View style={{position:"absolute",bottom:-10,right:0}}>
           <Star size={40}  fill={"orange"} strokeWidth={0}/>
          </View>
        </View>
      </View>

      {/* Right: Text info */}
      <View style={styles.rightSection}>
        <Text style={styles.title}>Top Affiliate</Text>

        <View style={styles.row}>
          <Text style={styles.text}>5 Courses Enrolled</Text>
          <Text style={[styles.text, { marginLeft: 12, color:"white" }]}>4 Certificate</Text>
        </View>

        <Text style={[styles.text, { marginTop: 6 }]}>
          emilyadmin@gmail.com
        </Text>

        <Text style={[styles.text, { marginTop: 6 }]}>
          +91 9910484556
        </Text>
      </View>
    </ExpoLinearGradient>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    gap:10
  },
  leftSection: {
    marginRight: 16,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "#fff",
  },
  badge: {
    position: "absolute",
    bottom: -6,
    right: -10,
    width: 36,
    height: 36,
  },
  rightSection: {
    flex: 1,
    gap:10
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  text: {
    fontSize: 15,
    color: "#000",
  },
});
