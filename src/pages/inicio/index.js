import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

export default function AppInicio() {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.touch}>
        <Text style={Styles.gravar}>Gravar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.touch2}>
        <Text style={Styles.ouvir}>Ouvir</Text>
      </TouchableOpacity>
      <Text style={Styles.timer}>00:00</Text>

      <Text style={Styles.texto2}>Pronto para começar</Text>

      <TouchableOpacity style={Styles.icon}>
        <Icon name="microphone" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
}
