import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { windowWidth } from "../../utils/Dimensions";
import { COLORS } from "../../theme/themes";

const FormInput = ({
  leftIcon,
  iconColor = "#fff",
  rightIcon,
  inputStyle,
  containerStyle,
  placeholderTextColor,
  placeholder,
  handlePasswordVisibility,
  onPress,
  autoCapitalize,
  keyboardType,
  maxLength,
  editable,
  width,
  autoFocus,
  height,
  backgroundColor,
  placeholderWidth,
  marginRight,
  ...rest
}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: COLORS.appBackground,
          width: placeholderWidth || "20%",
          marginBottom: -10,
          zIndex: 999,
          marginLeft: 10,
          // alignSelf: "center",
          //   justifyContent: "center",
          //   alignItems: "center",
          // alignContent: "center",
        }}
      >
        <Text
          style={{
            color: "#B4B4B4",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          {placeholder}
        </Text>
      </View>
      <View
        style={[
          styles.container,
          containerStyle,
          {
            width: windowWidth / (width || 1.4),
            height: height || 52,
            marginRight: marginRight || 0,
          },
        ]}
        onPress={onPress}
      >
        {leftIcon ? (
          <Ionicons
            name={leftIcon}
            size={20}
            color="#bbb"
            style={styles.leftIcon}
          />
        ) : null}
        <TextInput
          {...rest}
          autoCorrect={false}
          placeholderTextColor={placeholderTextColor}
          style={[styles.input, inputStyle]}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={editable}
        />
        {rightIcon ? (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handlePasswordVisibility}
          >
            <Ionicons
              name={rightIcon}
              size={20}
              color="#bbb"
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexDirection: "row",
    // padding: 17,
    // backgroundColor: "red",
    // backgroundColor: COLORS.appBlack,
    borderWidth: 1,
    borderColor: "#232324",
    height: 42,
    width: windowWidth / 1.1,
    // alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // alignContent: "center",
  },
  leftIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    width: "100%",
    fontSize: 16,
    color: "white",
    // backgroundColor: "red",
    height: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  rightIcon: {
    marginRight: 10,
    color: COLORS.formButton,
  },
});
