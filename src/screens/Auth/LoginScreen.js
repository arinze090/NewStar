import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../theme/themes";
import Ionicons from "react-native-vector-icons/Ionicons";
import { windowHeight, windowWidth } from "../../utils/Dimensions";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import { emailValidator } from "../../Library/Validation";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/features.js/user/userSlice";
import ScrollViewSpace from "../../components/common/ScrollViewSpace";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const getUserLanguage = state.user.userLanguage;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [rightIcon, setRightIcon] = useState("eye-outline");

  const [loading, setLoading] = useState(false);

  const [formError, setFormError] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
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

  const login = () => {
    dispatch(getUser({ email: email }));
  };

  const [buttonScale, setButtonScale] = useState(new Animated.Value(1));

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.8, // Scale down value
        duration: 200,
        useNativeDriver: true, // Use the native driver for performance
      }),
      Animated.timing(buttonScale, {
        toValue: 1, // Scale back to normal
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedStyle = {
    transform: [{ scale: buttonScale }],
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
              {!getUserLanguage && (
                <Ionicons
                  onPress={() => {
                    navigation.navigate("Language");
                  }}
                  name="chevron-back"
                  size={30}
                  color="white"
                />
              )}

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
              Login
            </Text>
            <Text style={{ color: "#ccc", fontSize: 13, fontWeight: "500" }}>
              Welcome Back! Please enter your details below to continue
            </Text>
          </View>

          <View style={styles.auth}>
            <FormInput
              value={email}
              placeholder="Email"
              width={1.1}
              placeholderWidth={windowWidth / 6.4}
              keyboardType="email-address"
              autoCapitalize="none"
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
              secureTextEntry={passwordVisibility}
              textContentType="password"
              placeholderWidth={windowWidth / 4.4}
              onChangeText={(txt) => {
                setPassword(txt);
              }}
              handlePasswordVisibility={handlePasswordVisibility}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              justifyContent: "flex-end",
              alignContent: "flex-end",
              alignSelf: "flex-end",
              padding: 10,
              marginRight: 10,
            }}
            onPress={() => {
              navigation.navigate("ForgetPassword");
            }}
          >
            <Text style={{ color: COLORS.formButton, fontWeight: "700" }}>
              Forget Password ?
            </Text>
          </TouchableOpacity>

          {/* Buttons */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.error}>{formError}</Text>

            <FormButton
              title={
                loading ? (
                  <ActivityIndicator size={20} color="white" />
                ) : (
                  "Login"
                )
              }
              disabled={!emailValidator(email)}
              onPress={() => {
                login();
              }}
            />
          </View>
          <View style={styles.alreadySection}>
            <Text style={styles.alreadyText}>Don’t have an account?{"  "}</Text>
            <TouchableOpacity
              style={styles.signup}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={{ color: COLORS.formButton, fontWeight: "600" }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollViewSpace />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    width: windowWidth / 1.1,
    // alignSelf: "center",
    marginTop: 30,
    marginLeft: 20,
    // backgroundColor: "red",
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
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
