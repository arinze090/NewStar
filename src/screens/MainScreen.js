import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";

import { COLORS } from "../theme/themes";
import HomeScreen from "./User/HomeScreen";
import ProfileScreen from "./User/ProfileScreen";
import MessageScreen from "./User/MessageScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerTitle: "Home",
        headerStyle: {
          backgroundColor: "#000917",
        },
        headerTitleStyle: {
          color: "#ccc",
        },
      }}
    />
  </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerTitle: "Profile",
        headerStyle: {
          backgroundColor: "#000917",
        },
        headerTitleStyle: {
          color: "#ccc",
        },
      }}
    />
  </Stack.Navigator>
);

const MessagesStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="MessageScreen"
      component={MessageScreen}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerTitle: "Messages",
        headerStyle: {
          backgroundColor: "#000917",
        },
        headerTitleStyle: {
          color: "#ccc",
        },
      }}
    />
  </Stack.Navigator>
);

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "";
          const routeWithNoTarBar = [];
          if (routeWithNoTarBar.includes(routeName)) {
            return { display: "none" };
          }
          return {
            backgroundColor: COLORS.appBackground,
          };
        })(route),
        tabBarActiveTintColor: COLORS.formButton,
        tabBarColor: "#000",
        tabBarInActiveBackgroundColor: "#000",
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ route }) => ({
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStack}
        options={({ route }) => ({
          tabBarLabel: "Messages",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubbles-outline" color={color} size={26} />
          ),
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="Profiles"
        component={ProfileStack}
        options={({ route }) => ({
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={26} />
          ),
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
