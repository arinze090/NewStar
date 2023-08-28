import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../theme/themes";
import Carousels from "../../components/common/Carousel";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Carousels />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
});
