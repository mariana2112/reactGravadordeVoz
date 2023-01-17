import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Navegar } from "./functions";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Tela2() {
  const navigation = useNavigation();
  const Navegar = () => {
    navigation.goBack();
  };
  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.img}
        source={require("../../assets/images/woman.png")}
      >
        <TouchableOpacity style={Styles.circle} onPress={() => Navegar()}>
          <Feather name="x-circle" size={40} color="white" />
        </TouchableOpacity>
      </ImageBackground>

      <TouchableOpacity style={Styles.icon}>
        <FontAwesome name="microphone" size={27} color="white" />
      </TouchableOpacity>
      <Text style={Styles.texto1}>
        Easy<Text style={Styles.text2}>Recorder</Text>
      </Text>
    </View>
  );
}
