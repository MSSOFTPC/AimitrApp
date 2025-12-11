import { StyleSheet } from "react-native";
import { Input, Text, View, XStack } from "tamagui";

const FormikInput = ({
  title,
  labelStyle,
  handleChange,
  handleBlur,
  values,
  name,
  icon,
  errors,
  placeholder,
  numeric,
  onChange,
  style,
  transform,
  multiline,
  numberOfLines,
  disabled,
  placeholderTextColor = "#A0A3B1",
  onKeyPress,
  secureTextEntry,
  maxLength,
  keyboardType
}) => {
  const isError = errors?.[name];
  const value = values?.[name]?.toString() || "";

  // Input props safely for Tamagui Input
  const inputProps: any = {};
  if (numeric) inputProps.keyboardType = "numeric";
  if (secureTextEntry) inputProps.secureTextEntry = true;

  // Handle text change + transformation
  const changeHandler = (val: string) => {
    let transformedVal = val;
    if (transform === "upperCase") transformedVal = val.toUpperCase();
    else if (transform === "lowerCase") transformedVal = val.toLowerCase();
    else if (transform === "capitalize")
      transformedVal = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();

    handleChange?.(name)(transformedVal);
    onChange?.(transformedVal);
  };

  return (
    <View
      style={[
        { width: "100%", marginBottom: 18 },
        style,
      ]}
    >
      {title && (
        <Text style={[styles.label, labelStyle]}>{title}</Text>
      )}

      <XStack
        alignItems="center"
        backgroundColor="#F7F8F9"
        borderColor={isError ? "red" : "#E8ECF4"}
        borderWidth={1}
        borderRadius={10}
        paddingHorizontal={12}
        height={56}
      >
        {/* {leftIcon && (
          <View style={{ marginRight: 8 }}>{leftIcon}</View>
        )} */}

        <Input
          flex={1}
          fontSize={16}
          fontWeight={100}
          backgroundColor="transparent"
          borderWidth={0}
          color="grey"
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={changeHandler}
          keyboardType={keyboardType}
          onBlur={handleBlur?.(name)}
          onKeyPress={onKeyPress}
          editable={!disabled}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          {...inputProps}
        />
      </XStack>

      {isError && (
        <Text style={styles.errorText}>
          {errors[name]}
        </Text>
      )}
    </View>
  );
};

export { FormikInput };

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
