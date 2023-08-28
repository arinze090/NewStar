import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../theme/themes";

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
});
