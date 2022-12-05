import AppLoading from "expo-app-loading";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components/native";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./mystyled";
import "react-native-gesture-handler"; // drawer navigation
import Geolocation from "@react-native-community/geolocation";
import { RecoilRoot } from "recoil";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    await Promise.all([...fonts]);
  };
  /*
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide(); // 추가
      }, 2000); // 스플래시 시간 조절 (2초)
    } catch (e) {
      console.warn("에러발생");
      console.warn(e);
    }
  });
  */
  const isDark = useColorScheme() === "dark"; // T or F
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return (
    <RecoilRoot>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </RecoilRoot>
  );
}
