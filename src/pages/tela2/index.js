import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Navegar } from "./functions";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
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
        <LinearGradient
          colors={["transparent", "white"]}
          start={{ x: 1.1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={Styles.linearGradient}
        ></LinearGradient>
      </ImageBackground>

      <LinearGradient style={Styles.icomic} colors={["#BFCDE0", "#5D5D81"]}>
        <TouchableOpacity>
          <FontAwesome name="microphone" size={27} color="white" />
        </TouchableOpacity>
      </LinearGradient>
      <View style={Styles.center}>
        <Text style={Styles.easy}>
          Easy<Text style={Styles.recorder}>Recorder</Text>
        </Text>
      </View>

      <View style={Styles.qcinza}>
        <View style={Styles.quadrado1} />
        <View style={Styles.quadrado2} />
        <View style={Styles.quadrado3} />
        <View style={Styles.quadrado4} />
      </View>

      <View style={Styles.qp}>
        <View style={Styles.quad1}>
          <Text style={Styles.text1}>4,99</Text>
          <Text style={Styles.t1}>Mensal</Text>
        </View>

        <View style={Styles.quad2}>
          <Text style={Styles.text2}>15,99</Text>
          <Text style={Styles.t2}>Anual</Text>
        </View>

        <View style={Styles.quad3}>
          <Text style={Styles.text3}>39,99</Text>
          <View style={Styles.linha} />
          <Text style={Styles.text4}>29,99</Text>
          <Text style={Styles.t3}>Vitalício</Text>
        </View>
      </View>

      <View style={Styles.circulo}>
        <View style={Styles.c}></View>
        <View style={Styles.c}></View>
        <View style={Styles.c3}></View>
      </View>

      <LinearGradient style={Styles.cont} colors={["#BFCDE0", "#5D5D81"]}>
        <TouchableOpacity>
          <Text style={Styles.t4}>Continuar</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View>
        <Text style={Styles.textao}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
}
