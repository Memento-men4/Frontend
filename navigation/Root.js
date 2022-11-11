import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import Stack from "./Stack";
import { TouchableOpacity } from "react-native";

const Nav = createNativeStackNavigator();

const Root = () => (
  //presentation: "modal"
  <Nav.Navigator screenOptions={{ headerShown: false }}>
    <Nav.Screen name="Tabs" component={Tabs} />
    <Nav.Screen name="Stack" component={Stack} />
  </Nav.Navigator>
);

export default Root;
