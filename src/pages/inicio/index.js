import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function AppInicio() {
  const navigation = useNavigation();
  const Gravar = () => {
    navigation.navigate("Ouvir");
  };
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.touch}>
        <Text style={Styles.gravar}>Gravar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.touch2}>
        <Text style={Styles.ouvir} onPress={() => Gravar()}>
          Ouvir
        </Text>
      </TouchableOpacity>
      <Text style={Styles.timer}>00:00</Text>

      <Text style={Styles.texto2}>Pronto para começar</Text>

      <LinearGradient style={Styles.icon} colors={["#BFCDE0", "#5D5D81"]}>
        <TouchableOpacity>
          <FontAwesome name="microphone" size={50} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
