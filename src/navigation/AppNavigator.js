import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS } from "../theme/themes";
import CustomDrawer from "../components/common/CustomDrawer";
import MainScreen from "../screens/MainScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Drawer.Navigator
      // ref={navigationRef}
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -15,
        },
        drawerActiveBackgroundColor: COLORS.black,
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: COLORS.btnBorderColor,
      }}
      headerMode="none"
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={22} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
