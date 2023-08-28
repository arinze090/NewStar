import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../theme/themes";
import Ionicons from "react-native-vector-icons/Ionicons";
import { windowHeight, windowWidth } from "../../utils/Dimensions";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import ScrollViewSpace from "../../components/common/ScrollViewSpace";
import { emailValidator } from "../../Library/Validation";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/features.js/user/userSlice";

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(true);
  const [rightIcon, setRightIcon] = useState("eye-outline");
  const [confirmRightIcon, setConfirmRightIcon] = useState("eye-outline");

  const [loading, setLoading] = useState(false);

  const [formError, setFormError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const register = () => {
    if (!firstName) {
      setFormError("Please fill the required fields");
    } else {
      dispatch(
        getUser({ email: email, firstName: firstName, lastName: lastName })
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
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
              Signup
            </Text>
            <Text style={{ color: "#ccc", fontSize: 13, fontWeight: "500" }}>
              Sign up to keep exploring amazing news around the world!{" "}
            </Text>
          </View>
          <View style={[styles.auth, { flexDirection: "row" }]}>
            <FormInput
              value={firstName}
              placeholder="First Name *"
              width={2.3}
              placeholderWidth={windowWidth / 3.6}
              keyboardType="default"
              onChangeText={(txt) => {
                setFirstName(txt);
                setFormError("");
              }}
              placeholderTextColor="#ccc"
              marginRight={10}
            />
            <FormInput
              value={lastName}
              placeholder="Last Name"
              width={2.25}
              placeholderWidth={windowWidth / 3.6}
              keyboardType="default"
              onChangeText={(txt) => {
                setLastName(txt);
                setFormError("");
              }}
              placeholderTextColor="#ccc"
            />
          </View>
          <View style={styles.auth}>
            <FormInput
              value={email}
              placeholder="Email *"
              width={1.1}
              autoCapitalize="none"
              placeholderWidth={windowWidth / 5.6}
              keyboardType="email-address"
              onChangeText={(txt) => {
                setEmail(txt);
                setFormError("");
                if (!emailValidator(txt)) {
                  setEmailError("Please enter a valid email");
                } else {
                  setEmailError("");
                }
              }}
              placeholderTextColor="#ccc"
            />
            {emailError && (
              <Text style={styles.validationError}>{emailError}</Text>
            )}
          </View>
          <View style={styles.auth}>
            <FormInput
              value={password}
              placeholder="Password"
              width={1.1}
              rightIcon={rightIcon}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={passwordVisibility}
              textContentType="password"
              placeholderWidth={windowWidth / 4.5}
              onChangeText={(txt) => {
                setPassword(txt);
              }}
              handlePasswordVisibility={handlePasswordVisibility}
            />
          </View>
          <View style={styles.auth}>
            <FormInput
              value={confirmPassword}
              placeholder="Confirm Password"
              width={1.1}
              rightIcon={confirmRightIcon}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={confirmPasswordVisibility}
              textContentType="password"
              placeholderWidth={windowWidth / 2.5}
              onChangeText={(txt) => {
                setConfirmPassword(txt);
              }}
              handlePasswordVisibility={handleConfirmPasswordVisibility}
            />
          </View>
          {/* Buttons */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.error}>{formError}</Text>

            <FormButton
              title={
                loading ? (
                  <ActivityIndicator color="white" size={20} />
                ) : (
                  "Signup"
                )
              }
              disabled={!emailValidator(email)}
              onPress={register}
            />
          </View>
          <View style={styles.alreadySection}>
            <Text style={styles.alreadyText}>
              Already have an account?{"  "}
            </Text>
            <TouchableOpacity
              style={styles.signup}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: COLORS.formButton, fontWeight: "600" }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollViewSpace />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
    // position: "absolute",
    bottom: 0,
    flexDirection: "row",
    marginTop: 20,
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
