import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import AppInicio from "../pages/inicio";
import Tela2 from "../pages/tela2";
import Tela3 from "../pages/tela3";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const navigation = useNavigation();
  const Navegar = (tela) => {
    navigation.navigate(tela, {});
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
          headerTintColor: "#3B3355",
          headerLeft: () => (
            <TouchableOpacity onPress={() => Navegar("Configurações")}>
              <Entypo name="menu" color="black" size={40}></Entypo>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <LinearGradient
              style={Styles.button}
              colors={["#BFCDE0", "#5D5D81"]}
            >
              <TouchableOpacity onPress={() => Navegar("Tela2")}>
                <Text style={Styles.pro}>Seja Pro</Text>
              </TouchableOpacity>
            </LinearGradient>
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Tela2"
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
        name="Configurações"
        component={Tela3}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerLeft: () => (
            <TouchableOpacity onPress={() => Navegar("EasyRecorder")}>
              <AntDesign name="arrowleft" color="black" size={30}></AntDesign>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
