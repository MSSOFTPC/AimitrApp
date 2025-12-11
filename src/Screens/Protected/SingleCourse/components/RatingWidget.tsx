import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RatingWidget = ({
  initialRating = 0,
  size = 28,
  disabled = false,
  onChange,
  style,
  handleGlobalClick
}) => {
  const [rating, setRating] = useState(initialRating);

  const handlePress = (index) => {
    if (disabled) return;
    setRating(index);
    if (onChange) onChange(index);
  };

  return (
    <TouchableOpacity onPress={handleGlobalClick} style={[styles.container,style]}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => handlePress(star)}
          activeOpacity={disabled ? 1 : 0.7}
          disabled={disabled}
        >
          <Ionicons
            name={star <= rating ? "star" : "star-outline"}
            size={size}
            color={star <= rating ? "#FF9747" : "#C0C0C0"}
            style={[disabled && styles.disabled]}
          />
        </TouchableOpacity>
      ))}
    </TouchableOpacity>
  );
};

export default RatingWidget;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});
