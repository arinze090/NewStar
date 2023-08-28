import { Image, ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { COLORS } from "../theme/themes";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import LottieView from "lottie-react-native";

const SplashScreen = () => {
  const animation = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require("../assets/newStarBg.png")}
      >
        <Image
          style={styles.logo}
          source={require("../assets/newStarLogo.png")}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.splashBg,
    justifyContent: "center",
    alignContent: "center",
    // alignSelf: "center",
    alignItems: "center",
  },
  imageBg: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    // backgroundColor: "white",
  },
  logo: {
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
});
