import { View, Text } from "react-native";
import Styles from "./styles";
import React from "react";

export default function Tela3() {
  return (
    <View style={Styles.container}>
      <View style={Styles.margin}>
        <Text style={Styles.text}>Geral</Text>
        <View>
          <Text style={Styles.text2}>Linguagem</Text>
          <Text style={Styles.text3}>Português (Brasil)</Text>
          <Text style={Styles.text2}>Fonte de áudio</Text>
          <Text style={Styles.text3}>Padrão</Text>
          <Text style={Styles.text2}>Qualidade de gravação</Text>
          <Text style={Styles.text3}>Padrão</Text>
          <Text style={Styles.text2}>Taxa de amostragem</Text>
          <Text style={Styles.text3}>48 KHz</Text>
        </View>
        <View style={Styles.tt}>
          <Text style={Styles.text}>Avançado</Text>
        </View>
        <View style={Styles.ttt}>
          <Text style={Styles.text2}>Linguagem</Text>
          <Text style={Styles.text3}>Português (Brasil)</Text>
          <Text style={Styles.text2}>Fonte de áudio</Text>
          <Text style={Styles.text3}>Padrão</Text>
          <Text style={Styles.text2}>Qualidade de gravação</Text>
          <Text style={Styles.text3}>Padrão</Text>
          <Text style={Styles.text2}>Taxa de amostragem</Text>
        </View>
      </View>
    </View>
  );
}
