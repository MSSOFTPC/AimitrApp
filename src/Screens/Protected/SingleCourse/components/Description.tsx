import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Description = ({ 
  title, 
  description 
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.card}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Description */}
      <Text
        style={styles.description}
        numberOfLines={expanded ? undefined : 3}
      >
        {description}
      </Text>

      {/* Show More / Less */}
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.showMore}>
          {expanded ? "Show Less" : "Show More"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 16,

    // shadow for iOS
    shadowColor: "#00000060",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,

    // shadow for Android
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  showMore: {
    marginTop: 8,
    fontSize: 14,
    color: "#007BFF",
    fontWeight: "500",
  },
});
