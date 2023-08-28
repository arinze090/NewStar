import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthNavigator";
import AppNavigation from "./AppNavigator";

const MainNavigator = () => {
  // api login functionality and navigation using redux data
  const state = useSelector((state) => state);

  const loggedInUser = state?.user?.user;
  console.log("logged", loggedInUser);

  return (
    <NavigationContainer>
      {loggedInUser ? <AppNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
