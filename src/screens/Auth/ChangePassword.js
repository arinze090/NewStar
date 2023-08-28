import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../theme/themes";
import Ionicons from "react-native-vector-icons/Ionicons";
import { windowHeight, windowWidth } from "../../utils/Dimensions";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import { checkPassword, checkPasswordMatch } from "../../Library/Validation";

const ChangePassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(true);
  const [rightIcon, setRightIcon] = useState("eye-outline");
  const [confirmRightIcon, setConfirmRightIcon] = useState("eye-outline");

  const [formError, setFormError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatedPassword = checkPassword(newPassword);
  const checkPasswords = checkPasswordMatch(newPassword, confirmPassword);
  //   console.log("checkPasswords", checkPasswords);

  // This function handles the password visibility displaying the icons
  const handlePasswordVisibility = () => {
    if (rightIcon === "eye-outline") {
      setRightIcon("eye-off-outline");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off-outline") {
      setRightIcon("eye-outline");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const handleConfirmPasswordVisibility = () => {
    if (confirmRightIcon === "eye-outline") {
      setConfirmRightIcon("eye-off-outline");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (confirmRightIcon === "eye-off-outline") {
      setConfirmRightIcon("eye-outline");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  };

  const resetPassword = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          style={styles.imageBg}
          source={require("../../assets/loginBg.png")}
        >
          <Ionicons
            onPress={() => {
              navigation.goBack();
            }}
            name="chevron-back"
            size={30}
            color="white"
          />
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/newStarLogo.png")}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>
          Change Password
        </Text>
      </View>

      <View style={styles.auth}>
        <FormInput
          value={newPassword}
          placeholder="New Password"
          width={1.1}
          rightIcon={rightIcon}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType="password"
          placeholderWidth={windowWidth / 3.2}
          onChangeText={(txt) => {
            setNewPassword(txt);
          }}
          handlePasswordVisibility={handlePasswordVisibility}
        />
      </View>
      <View style={styles.auth}>
        <FormInput
          value={confirmPassword}
          placeholder="Confirm New Password"
          width={1.1}
          rightIcon={confirmRightIcon}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={confirmPasswordVisibility}
          textContentType="password"
          placeholderWidth={windowWidth / 2.2}
          onChangeText={(txt) => {
            setConfirmPassword(txt);
          }}
          handlePasswordVisibility={handleConfirmPasswordVisibility}
        />
      </View>

      {/* Buttons */}
      <View style={{ marginTop: 50 }}>
        <FormButton title="Reset Password" onPress={resetPassword} />
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
  imageBg: {
    padding: 20,
    height: windowHeight / 4,
  },
  logo: {
    width: windowWidth / 6,
    height: windowHeight / 10,
  },
  logoContainer: {
    backgroundColor: COLORS.formButton,
    width: windowWidth / 5.2,
    height: windowHeight / 10,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
  },
  auth: {
    // width: windowWidth / 1.1,
    // alignSelf: "center",
    marginTop: 30,
    marginLeft: 20,
  },
  error: {
    color: "red",
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 7,
    fontSize: 13,
  },
  alreadySection: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
  },
  alreadyText: {
    color: "white",
    fontSize: 13,
    fontWeight: "600",
  },
  signup: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    // backgroundColor: "red",
    // marginTop: 10,
  },
});
