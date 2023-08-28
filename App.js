import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as ReduxStoreProvider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/navigation/MainNavigator";
import store, { persistor } from "./src/redux/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxStoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </ReduxStoreProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
