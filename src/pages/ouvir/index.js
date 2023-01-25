import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Styles from "./styles";
import { Item } from "./functions";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Slider } from "@miblanchard/react-native-slider";
import LinearGradient from "react-native-linear-gradient";
import React, { useState } from "react";

export default function Ouvir() {
  const [playerState, setPlayerState] = useState(false);

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

  function toggleMusicPlay() {
    setPlayerState(!playerState);
  }

  function renderItem({ item }) {
    return <Item data={item} />;
  }

  return (
    <View style={Styles.container}>
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
            containerStyle={{ flex: 1, marginRight: "6%", marginLeft: "6%" }}
            thumbTintColor="white"
            value={2}
            minimumValue={1}
            maximumValue={5}
            step={2}
            trackClickable={true}
            maximumTrackTintColor="#e9f0ef"
            minimumTrackTintColor="white"
          />
          <Text style={Styles.texto}>00:45</Text>
        </View>

        <View style={Styles.alinhar}>
          <TouchableOpacity>
            <Ionicons name="ios-repeat-outline" size={35} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="banckward" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleMusicPlay}>
            {playerState ? (
              <AntDesign name="play" size={100} color={"white"} />
            ) : (
              <Ionicons name="stop-circle" size={120} color={"white"} />
            )}
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="forward" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={Styles.um}>1x</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
