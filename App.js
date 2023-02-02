import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DrawerNavigation from "./src/routes/drawer";
import sqlite from "./src/classes/sqlite";

sqlite.initDB();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigation></DrawerNavigation>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
