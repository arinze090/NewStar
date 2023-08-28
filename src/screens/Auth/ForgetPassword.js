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
import { emailValidator } from "../../Library/Validation";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

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
          Password Recovery
        </Text>
        <Text
          style={{
            color: "#ccc",
            fontSize: 13,
            fontWeight: "500",
            marginTop: 10,
          }}
        >
          Enter the email address associated with your account and we'll email
          you a 6-digit code to reset your password
        </Text>
      </View>

      <View style={styles.auth}>
        <FormInput
          value={email}
          placeholder="Email"
          width={1.1}
          placeholderWidth={windowWidth / 6.4}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(txt) => {
            setEmail(txt);
            if (!emailValidator(txt)) {
              setEmailError("Please enter a valid email");
            } else {
              setEmailError("");
            }
          }}
          placeholderTextColor="#ccc"
        />
        {emailError && <Text style={styles.validationError}>{emailError}</Text>}
      </View>

      {/* Buttons */}
      <View style={{ marginTop: 50 }}>
        <FormButton
          title="Get Verification Code"
          onPress={() => {
            navigation.navigate("ChangePassword");
          }}
          disabled={!emailValidator(email)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

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
  validationError: {
    color: COLORS.formButton,
    fontWeight: "500",
    marginBottom: 15,
    fontSize: 13,
    // textAlign: 'center',
  },
});
