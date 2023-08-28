import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../theme/themes";
import { windowHeight, windowWidth } from "../../utils/Dimensions";

const FormButton = ({
  title,
  onPress,
  disabled,
  marginBottom,
  marginTop,
  width,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        disabled ? styles.disabledBtn : styles.btn,
        {
          marginTop: marginTop,
          marginBottom: marginBottom,
          width: windowWidth / (width || 1.1),
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  btn: {
    width: windowWidth / 1.2,
    height: 52,
    borderRadius: 2,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.formButton,
  },
  btnText: {
    alignSelf: "center",
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
    alignContent: "center",
  },
  disabledBtn: {
    width: windowWidth / 1.2,
    height: 52,
    borderRadius: 2,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.formButton,
    opacity: 0.45,
  },
});
