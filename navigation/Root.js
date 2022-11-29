import React from "react";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Stack from "./Stack";
import Write from "../screens/Write";
import DrawerComponent from "./Drawer";

const Nav = createNativeStackNavigator();

const Root = () => (
  //presentation: "modal"
  <Nav.Navigator screenOptions={{ headerShown: false }}>
    <Nav.Screen
      name="Home"
      component={DrawerComponent} // const 이름이 들어가야함
    />
    <Nav.Screen name="Stack" options={{}} component={Stack} />
  </Nav.Navigator>
);
// <Nav.Screen name="Write" options={{}} component={Write} />
export default Root;
