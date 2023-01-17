import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Entypo";
import AppInicio from "../pages/inicio";
import Tela2 from "../pages/tela2";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const navigation = useNavigation();
  const Navegar = () => {
    navigation.navigate("Tela2", {});
  };
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
          headerLeft: () => (
            <TouchableOpacity>
              <Icon name="menu" color="black" size={40}></Icon>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => Navegar()} style={Styles.button}>
              <Text style={Styles.pro}>Seja Pro</Text>
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>
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
