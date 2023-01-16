import React from "react";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Entypo";
import AppInicio from "../pages/inicio";
import Tela2 from "../pages/tela2";
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EasyRecorder"
        component={AppInicio}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert("This is a button!")}
              name="menu"
              title="Info"
              color="black"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Tela2"
        component={Tela2}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
}
