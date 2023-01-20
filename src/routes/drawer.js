import React from "react";
import { TouchableOpacity, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AppInicio from "../pages/inicio";
import Tela3 from "../pages/tela3";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from ".";
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const navigation = useNavigation();
  const Navegar = (tela) => {
    navigation.navigate(tela, {});
  };

  return (
    <Drawer.Navigator initialRouteName="EasyRecorder">
      <Drawer.Screen
        name="EasyRecorder"
        component={AppInicio}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "#3B3355",
          headerRight: () => (
            <LinearGradient
              style={Styles.button}
              colors={["#BFCDE0", "#5D5D81"]}
            >
              <TouchableOpacity onPress={() => Navegar("Compra")}>
                <Text style={Styles.pro}>Seja Pro</Text>
              </TouchableOpacity>
            </LinearGradient>
          ),
        }}
      />
      <Drawer.Screen
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
      <Drawer.Screen
        name="Stack"
        component={StackNavigation}
        options={{ headerShown: false }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}
