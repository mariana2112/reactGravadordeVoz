import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DrawerNavigation from "./src/routes/drawer";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigation></DrawerNavigation>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
