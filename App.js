import { View, Text, TouchableOpacity } from "react-native";
import AppInicio from "./src/pages/inicio";
import Tela2 from "./src/pages/tela2";
import StackNavigation from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation></StackNavigation>
    </NavigationContainer>
  );
}
