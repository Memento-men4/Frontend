import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity } from "react-native";
const Days = ({ navigation: { navigate } }) => (
  <TouchableOpacity
    onPress={() => navigate("Tabs", { screen: "Search" })}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>타임라인 들어가야하고..</Text>
  </TouchableOpacity>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <NativeStack.Screen
      name="Days"
      component={Days}
      options={{ headerShown: false }}
    />
  </NativeStack.Navigator>
);

export default Stack;
