import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const KeyboardAvoidingComponent = ({ children }) => {
  return <SafeAreaView>{children} </SafeAreaView>;
};

export default KeyboardAvoidingComponent;

const styles = StyleSheet.create({});
