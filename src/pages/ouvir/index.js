import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "./styles";
import { Item } from "./functions";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
import LinearGradient from "react-native-linear-gradient";
import React from "react";

export default function Ouvir() {
  const ARRAY = [
    {
      id: "1",
      nome: "Teste.mp4",
      data: "12/01/2023",
      hora: "14:50",
      kb: "46,21kB",
      tag: "Estudo",
      tempo: "00:45",
    },
  ];

  function renderItem({ item }) {
    return <Item data={item} />;
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity>
          <Text style={Styles.letra2}>Gravar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={Styles.letra}>Ouvir</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.body}>
        <FlatList
          data={ARRAY}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <LinearGradient style={Styles.bottom} colors={["#BFCDE0", "#5D5D81"]}>
        <View style={Styles.linha2}>
          <Text style={Styles.text}>00:00</Text>
          <Slider
            containerStyle={{
              flex: 1,
              marginRight: 2,
              marginLeft: 2,
            }}
            thumbTintColor="#FFFFFF"
            value={2}
            minimumValue={1}
            maximumValue={5}
            step={1}
            trackClickable={true}
            maximumTrackTintColor="#e9f0ef"
            minimumTrackTintColor="white"
          />
          <Text style={Styles.texto}>00:45</Text>
        </View>

        <View style={Styles.linha}>
          <TouchableOpacity>
            <Ionicons name="ios-repeat-outline" size={35} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="banckward" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="play" size={69} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="forward" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={Styles.once}>1x</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
