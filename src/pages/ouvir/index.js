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
import _ from "lodash";

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function Ouvir() {
  const [play, setPlay] = useState(false);
  const [list, setList] = useState([]);
  const [atualiza, setAtualiza] = useState(false);
  const [cliqueLista, setCliqueLista] = useState(false); //chama player
  const [recording, setRecording] = useState(false);
  const [position, setPosition] = useState({
    currentPositionSec: 1,
    currentDurationSec: 20,
    playTime: "00:00",
    duration: "00:00",
  });

  useEffect(() => {
    async function getData() {
      // set os valores do database
      const data = await sqlite.query("SELECT * FROM audios");
      setList(data);
    }
    getData();
  }, [atualiza]);

  function TouchPlay() {
    setRecording(!recording);
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
        setAtualiza={setAtualiza}
        TouchClique={TouchClique}
        cliqueLista={cliqueLista}
        setCliqueLista={setCliqueLista}
      />
    );
  }

  async function onStartPlay() {
    setRecording(true);
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener((e) => {
      setPosition({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmss(
          Math.floor(e.currentPosition / 1000)
        ),
        duration: audioRecorderPlayer.mmss(Math.floor(e.duration / 1000)),
      });
      return;
    });
  }

  async function onPausePlay() {
    setRecording(false);
    await audioRecorderPlayer.pausePlayer();
  }

  async function idNext() {
    try {
      console.log(cliqueLista);
      let index;
      _.findIndex(list, (valor, i) => {
        if (valor.id_audio === cliqueLista) {
          index = i;
        }
      });
      setCliqueLista(list[index + 1].id_audio);
      console.log(index);
    } catch (error) {
      console.log(error);
    }
  }

  async function idBack() {
    try {
      console.log(cliqueLista);
      let index;
      _.findIndex(list, (valor, i) => {
        if (valor.id_audio === cliqueLista) {
          index = i;
        }
      });
      setCliqueLista(list[index - 1].id_audio);
      console.log(index);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id_audio}
        />
      </View>

      {cliqueLista ? (
        <LinearGradient style={Styles.bottom} colors={["#BFCDE0", "#5D5D81"]}>
          <View style={Styles.linha2}>
            <Text style={Styles.text}>{position.playTime}</Text>
            <Slider
              containerStyle={{ flex: 1, marginRight: "6%", marginLeft: "6%" }}
              thumbTintColor="#FFFFFF"
              value={position.currentPositionSec}
              minimumValue={1}
              maximumValue={position.currentDurationSec}
              step={1}
              trackClickable={true}
              maximumTrackTintColor="#e9f0ef"
              minimumTrackTintColor="#fff"
            />
            <Text style={Styles.texto}>{position.playTime}</Text>
          </View>

          <View style={Styles.alinhar}>
            <TouchableOpacity onPress={idBack}>
              <AntDesign name="banckward" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={recording ? onPausePlay : onStartPlay}>
              {play ? (
                <AntDesign name="play" size={100} color={"white"} />
              ) : (
                <Ionicons name="stop-circle" size={120} color={"white"} />
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={idNext}>
              <AntDesign name="forward" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ) : null}
    </View>
  );
}
