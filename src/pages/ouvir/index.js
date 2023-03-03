import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Styles from "./styles";
import { Item } from "./functions";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Slider } from "@miblanchard/react-native-slider";
import React, { useState, useEffect } from "react";
import sqlite from "../../classes/sqlite";
import LinearGradient from "react-native-linear-gradient";
import AudioRecorderPlayer from "react-native-audio-recorder-player";

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function Ouvir() {
  const [play, setPlay] = useState(false);
  const [list, setList] = useState([]);
  const [atualiza, setAtualiza] = useState(false);
  const [cliqueLista, setCliqueLista] = useState(false); //chama player
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    async function getData() {
      // set os valores do database
      const data = await sqlite.query("SELECT * FROM audios");
      setList(data);
    }
    getData();
  }, [atualiza]);

  function TouchPlay() {
    setPlay(!play);
  }

  function TouchClique() {
    setCliqueLista(!cliqueLista);
  }

  // ponhamos o setAtualiza pq temos que mandar pra function e usar ele la, por isso criamos uma const
  function renderItem({ item }) {
    return (
      <Item
        data={item}
        setList={setList}
        setCliqueLista={setCliqueLista}
        cliqueLista={cliqueLista}
      />
    );
  }

  async function onStartPlay() {
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    this.audioRecorderPlayer.addPlayBackListener((e) => {
      this.setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition)
        ),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
      return;
    });
  }

  async function onPausePlay() {
    await this.audioRecorderPlayer.pausePlayer();
  }

  async function onStopPlay() {
    console.log("onStopPlay");
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {cliqueLista ? (
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

            <TouchableOpacity onPress={recording ? onStopPlay : onStartPlay}>
              <AntDesign name="banckward" size={30} color="#3B3355" />
            </TouchableOpacity>

            <TouchableOpacity onPress={TouchPlay}>
              {play ? (
                <AntDesign name="play" size={100} color={"white"} />
              ) : (
                <Ionicons name="stop-circle" size={120} color={"white"} />
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={recording ? onStopPlay : onPausePlay}>
              <AntDesign name="forward" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={Styles.um}>1x</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ) : null}
    </View>
  );
}
