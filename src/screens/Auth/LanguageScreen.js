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
import { RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { setUserLanguage } from "../../redux/features.js/user/userSlice";

const languages = [
  {
    id: 1,
    name: "English",
    value: "English",
  },
  {
    id: 2,
    name: "French",
    value: "French",
  },
];
const LanguageScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const userLanguage = useSelector((state) => state.user.userLanguage);
  console.log("userLanguage", userLanguage);
  const [language, setLanguage] = useState("");
  console.log("language", language);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          style={styles.imageBg}
          source={require("../../assets/loginBg.png")}
        >
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
          Select Language
        </Text>
        <Text style={{ color: "#ccc", fontSize: 13, fontWeight: "500" }}>
          Choose your preferred language for displaying the app{" "}
        </Text>
      </View>

      {languages.map((cur, i) => (
        <TouchableOpacity
          key={i}
          style={styles.languageSelector}
          onPress={() => {
            setLanguage(cur.value);
          }}
        >
          <Text style={styles.languageName}>{cur.name}</Text>
          <RadioButton.Android
            value={cur.value}
            status={language === cur.value ? "checked" : "unchecked"}
            onPress={() => {
              setLanguage(cur.value);
            }}
            color={COLORS.formButton}
            uncheckedColor="#808080"
          />
        </TouchableOpacity>
      ))}

      {/* Buttons */}
      <View style={{ marginTop: 50 }}>
        <FormButton
          title="Get Started"
          onPress={() => {
            dispatch(setUserLanguage(language));
            navigation.navigate("Login");
          }}
          disabled={!language}
        />
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
    paddingTop: 30,
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
    marginTop: 30,
    marginLeft: 20,
  },
  languageSelector: {
    width: windowWidth / 1.1,
    // height: windowHeight / 9,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    // backgroundColor: "red",
    marginTop: 20,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#232324",
  },
  languageName: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 10,
  },
});
