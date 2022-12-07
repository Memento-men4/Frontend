import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Infos from "../stack/info/Infos";
import Risk from "../stack/info/Risk";
import CurrentSituation from "../stack/info/CurrentSituation";
import Prevent from "../stack/info/Prevent";
import Game from "../stack/game/Game";
import Game1 from "../stack/game/Game1";
import Game2 from "../stack/game/Game2";
import HomeInfos from "../screens/home/HomeInfos";
import HomeGame from "../screens/home/HomeGame";
import HomeDiagnosis from "../screens/home/HomeDiagnosis";
import Write from "../screens/Write";
import Game2Answer from "../stack/game/Game2Answer";
import Game3First from "../stack/game/Game3First";
import Game3Second from "../stack/game/Game3Second";
import Game3Third from "../stack/game/Game3Third";
import Days from "../stack/calendarDay/Days";
import Start from "../stack/Start";

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <NativeStack.Screen
      name="Start"
      component={Start}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Days"
      component={Days}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Infos"
      component={Infos}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Risk"
      component={Risk}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="CurrentSituation"
      component={CurrentSituation}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Prevent"
      component={Prevent}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game"
      component={Game}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game1"
      component={Game1}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game2"
      component={Game2}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game3First"
      component={Game3First}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game3Second"
      component={Game3Second}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game3Third"
      component={Game3Third}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="HomeInfos"
      component={HomeInfos}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="HomeGame"
      component={HomeGame}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="HomeDiagnosis"
      component={HomeDiagnosis}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Write"
      component={Write}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game2Answer"
      component={Game2Answer}
      options={{ headerShown: false }}
    />
  </NativeStack.Navigator>
);

export default Stack;
