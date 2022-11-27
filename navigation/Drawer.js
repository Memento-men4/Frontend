import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
  Alert,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";
import { loginFlag } from "../atom";
import { useRecoilState, atom } from "recoil";

import Infos from "../stack/info/Infos";
import Diagnosis from "../screens/Diagnosis";
import Tabs from "./Tabs";
import Login from "../screens/Login";
const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  //const flag = useContext(Flag);
  const [flag, setFlag] = useRecoilState(loginFlag);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {flag === 1 ? (
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 10,
            left: 10,
            bottom: 600,
            backgroundColor: "gray",
            padding: 10,
            borderRadius: 3,
          }}
          onPress={() => {
            Alert.alert("Logout");
            setFlag(0);
          }}
        >
          <Text>로그아웃</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const DrawerComponent = ({ navigation }) => {
  const [login, setLogin] = useRecoilState(loginFlag);
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        drawerActiveBackgroundColor: "#ffda79",
        drawerActiveTintColor: "white",
        drawerStyle: {
          backgroundColor: "white",
        },
        headerStyle: {
          backgroundColor: "#ffda79", // 홈 뒤에 백그라운드 컬러
        },
      })}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        options={{
          title: "홈",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("/Users/leesukcheol/memento/assets/images/logo_J.png")}
                style={[styles.icon]}
              />
            </TouchableOpacity>
          ),
        }}
        name="Main"
        component={Tabs}
      />
      {login === 0 ? (
        <Drawer.Screen
          options={{
            title: "로그인",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <Image
                  source={require("/Users/leesukcheol/memento/assets/images/logo_J.png")}
                  style={[styles.icon]}
                />
              </TouchableOpacity>
            ),
          }}
          name="Login"
          component={Login}
        />
      ) : null}
      <Drawer.Screen
        options={{
          title: "정보",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("/Users/leesukcheol/memento/assets/images/logo_J.png")}
                style={[styles.icon]}
              />
            </TouchableOpacity>
          ),
        }}
        name="Infos"
        component={Infos}
      />
      <Drawer.Screen
        options={{
          title: "자가 진단",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("/Users/leesukcheol/memento/assets/images/logo_J.png")}
                style={[styles.icon]}
              />
            </TouchableOpacity>
          ),
        }}
        name="diagnosis"
        component={Diagnosis}
      />
    </Drawer.Navigator>

    // 로그인 성공하면 홈으로 이동하는 거 구현해야함... ㅈ댓다..
    // 그리고 로그인 성공하면 드로우 네비 바에서 로그아웃 뜨게 해야함
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default DrawerComponent;
