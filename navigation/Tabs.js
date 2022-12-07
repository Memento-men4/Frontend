import React, { useState, useEffect } from "react";
import Recording from "../screens/Recording";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calendar from "../screens/Calendar";
import { useColorScheme } from "react-native";
import LG from "../screens/LG";
import { Ionicons } from "@expo/vector-icons";
import Game from "../stack/game/Game";
import { loginFlag } from "../atom";
import { useRecoilState } from "recoil";
import { useIsFocused } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark"; // T or F
  const isFocused = useIsFocused();
  const [login, setLogin] = useRecoilState(loginFlag);
  useEffect(() => {
    console.log("login", login);
  }, [login, isFocused]);
  return (
    // 바텀탭 다 속성 적용하려면 네비게이터에 screenOptions, 각각하려면 스크린에 options
    <Tab.Navigator
      initialRouteName="Home"
      //initialRouteName={login === 1 ? "Home" : "Game"}
      screenOptions={{
        tabBarStyle: { backgroundColor: isDark ? "#1e272e" : "white" },
        tabBarActiveTintColor: isDark ? "#ffa801" : "#1e272e",
        tabBarInactiveTintColor: isDark ? "#d2dae2" : "#808e9b",
        headerShown: false, // 헤더 중첩 방지
        headerStyle: {
          backgroundColor: isDark ? "#1e272e" : "white",
        },
        headerTitleStyle: {
          // 화면 헤더 타이틀
          color: isDark ? "white" : "#1e272e",
          fontSize: 19,
          fontWeight: "bold",
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
        name="Home"
        component={Calendar}
        options={{
          //tabBarBadge: 0, // 홈화면 옆에 숫자
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Recording"
        component={Recording}
        options={{
          //headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="mic" size={size} color={color} />;
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
      <Tab.Screen
        name="Game"
        component={Game}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="game-controller" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
