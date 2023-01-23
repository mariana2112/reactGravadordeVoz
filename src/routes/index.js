import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ouvir from "../pages/ouvir";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ouvir"
        component={Ouvir}
        options={{
          animation: "none",
        }}
      />
    </Stack.Navigator>
  );
}
