import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../theme/themes";
import { windowHeight } from "../../utils/Dimensions";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserLanguage,
  signOutUser,
} from "../../redux/features.js/user/userSlice";

const drawerNav = [
  {
    iconName: "home-outline",
    name: "Home",
    navigate: "HomeScreen",
  },
  {
    iconName: "search-outline",
    name: "Search",
    navigate: "Search",
  },
];

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  console.log("user", user);
  const onSignOut = () => {
    dispatch(signOutUser());
    dispatch(clearUserLanguage());
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: COLORS.appBackground,
          height: windowHeight,
        }}
      >
        {user ? (
          <View style={styles.login}>
            <View style={styles.person}>
              <Ionicons name="person-outline" size={16} color="white" />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={[styles.userName, { fontSize: 14, fontWeight: "500" }]}
              >
                Welcome,{" "}
              </Text>
              <Text style={styles.userName}>{user.email}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.login}>
            <View style={styles.person}>
              <Ionicons name="person-outline" size={16} color="white" />
            </View>

            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.userName}
            >
              Login
            </Text>
          </View>
        )}
      </DrawerContentScrollView>
      <View
        style={{
          padding: 15,
          backgroundColor: COLORS.appBackground,
          paddingBottom: 0,
        }}
      >
        {!user ? (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.set}
            onPress={() => navigation.navigate("Login")}
          >
            <View style={styles.setsContent}>
              <Ionicons name="log-in-outline" size={20} color="white" />
              <Text style={styles.settingsText}>Log In</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.set}
            onPress={onSignOut}
          >
            <View style={styles.setsContent}>
              <Ionicons name="log-in-outline" size={20} color="white" />
              <Text style={styles.settingsText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          padding: 15,
          backgroundColor: COLORS.appBackground,
          paddingBottom: 40,
        }}
      >
        <Text style={{ color: COLORS.pinky, fontSize: 14, marginLeft: 12 }}>
          Version 1.0.0
        </Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  person: {
    // backgroundColor: 'white',
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 10,
  },
  login: {
    margin: 15,
    flexDirection: "row",
    marginBottom: 30,
    // backgroundColor: 'pink',
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  userName: {
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 16,
    color: "#ccc",
    fontWeight: "700",
  },
  welcome: {
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 12,
    color: "#fff",
    fontWeight: "500",
  },
  set: {
    marginBottom: 3,
    // borderBottomColor: '#333',
    // borderBottomWidth: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: 'pink',
    borderTopColor: "#333",
    borderTopWidth: 1,
  },
  setsContent: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    // marginBottom: 18,

    // padding: 10,

    // margin: 5,
    // marginTop: 10,
  },
  settingsText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ccc",
    marginLeft: 17,
  },
  celebProfileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    // marginBottom: 10,
    borderWidth: 2,
    borderColor: COLORS.purple,
  },
});
