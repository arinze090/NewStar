import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import SplashScreen from "../screens/SplashScreen";
import LanguageScreen from "../screens/Auth/LanguageScreen";
import ForgetPassword from "../screens/Auth/ForgetPassword";
import ChangePassword from "../screens/Auth/ChangePassword";
import { useDispatch, useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [loading, setLoading] = useState(true);
  const userLanguage = useSelector((state) => state.user.userLanguage);
  console.log("userLanguage", userLanguage);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {loading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : !userLanguage ? (
        <Stack.Screen
          name="Language"
          component={LanguageScreen}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
