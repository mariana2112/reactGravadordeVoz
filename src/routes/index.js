import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tela2 from "../pages/tela2";
import Ouvir from "../pages/ouvir";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Compra"
        component={Tela2}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="Ouvir"
        component={Ouvir}
        options={{
          headerShown: false,
          animation: "none",
        }}
      />
    </Stack.Navigator>
  );
}
