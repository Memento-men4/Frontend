import React from "react";
import Recoding from "../screens/Recoding";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calendar from "../screens/Calendar";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark"; // T or F
  return (
    // 바텀탭 다 속성 적용하려면 네비게이터에 screenOptions, 각각하려면 스크린에 options
    <Tab.Navigator
      initialRouteName="Calendar"
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
        tabBarBadge: 0,
      }}
    >
      <Tab.Screen name="Recoding" component={Recoding} />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="calendar" size={24} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
