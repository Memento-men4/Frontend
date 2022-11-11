import React from "react";
import Recoding from "../screens/Recoding";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calendar from "../screens/Calendar";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./Stack";
import LG from "../screens/LG";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark"; // T or F
  return (
    // 바텀탭 다 속성 적용하려면 네비게이터에 screenOptions, 각각하려면 스크린에 options
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: isDark ? "#1e272e" : "white" },
        tabBarActiveTintColor: isDark ? "#ffa801" : "#1e272e",
        tabBarInactiveTintColor: isDark ? "#d2dae2" : "#808e9b",
        headerStyle: {
          backgroundColor: isDark ? "#1e272e" : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : "#1e272e",
        },
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Recoding"
        component={Recoding}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="mic" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Calendar}
        options={{
          tabBarBadge: 0, // 홈화면 옆에 숫자
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="LG"
        component={LG}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
