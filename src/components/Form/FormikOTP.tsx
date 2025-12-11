import React, { useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, XStack } from "tamagui";

interface FormikOTPInputProps {
  title?: string;
  values: any;
  errors?: any;
  handleChange?: any;
  handleBlur?: any;
  name: string;
  maxLength?: number;
}

const FormikOTPInput: React.FC<FormikOTPInputProps> = ({
  title,
  values,
  errors,
  handleChange,
  handleBlur,
  name,
  maxLength = 6,
}) => {
  const value = values?.[name] || "";
  const inputsRef = useRef<any[]>([]);

  const handleTextChange = (text: string, index: number) => {
    let otpArray = value.split("");
    otpArray[index] = text;

    const newValue = otpArray.join("").slice(0, maxLength);
    handleChange?.(name)(newValue);

    // Auto focus next input
    if (text && index < maxLength - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      let otpArray = value.split("");
      otpArray[index] = ""; // Clear current box
      handleChange?.(name)(otpArray.join(""));

      // Focus previous input if not first
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <View style={{ width: "100%", marginBottom: 18 }}>
      {title && <Text style={styles.label}>{title}</Text>}

      <XStack justifyContent="space-between">
        {Array.from({ length: maxLength }).map((_, i) => (
          <Input
            key={i}
            ref={(ref) => (inputsRef.current[i] = ref)}
            value={value[i] || ""}
            onChangeText={(text) => handleTextChange(text, i)}
            onKeyPress={(e) => handleKeyPress(e, i)}
            maxLength={1}
            keyboardType="number-pad"
            textAlign="center"
            fontSize={20}
            fontWeight="600"
            borderWidth={1}
            borderColor={errors?.[name] ? "red" : "#E8ECF4"}
            borderRadius={10}
            width={50}
            height={56}
            backgroundColor="#F7F8F9"
          />
        ))}
      </XStack>

      {errors?.[name] && <Text style={styles.errorText}>{errors[name]}</Text>}
    </View>
  );
};

export default FormikOTPInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginTop: 4,
    marginLeft: 6,
  },
});
