import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import Styles from "./styles";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import sqlite from "../../classes/sqlite";
import { Slider } from "@miblanchard/react-native-slider";
import Trimmer from "react-native-trimmer";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import _ from "lodash";

const audioRecorderPlayer = new AudioRecorderPlayer(); //p tocar o audio

export function Navegar(navigation) {
  navigation.navigate("Principal");
}

export function Item({
  data,
  setAtualiza,
  onStartPlay,
  onPausePlay,
  setCliqueLista,
  cliqueLista,
}) {
  const [modalVisibleIcon, setModalVisibleIcon] = useState(false);
  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState("");
  const [recording, setRecording] = useState(false);
  const [position, setPosition] = useState({
    currentPositionSec: 1,
    currentDurationSec: 20,
    playTime: "00:00",
    duration: "00:00",
  });
  const [trimmer, setTrimmer] = useState({
    trimmerLeftHandlePosition: 0,
    trimmerRightHandlePosition: 13,
  });

  //SEMPRE FAZER COM SQLITE, LEMBRA DE PUXAR COMO $
  async function deleteId(id_audio) {
    await sqlite.query(`DELETE FROM audios WHERE id_audio = ${id_audio}`);
    // um jeito de fazer o atualiza página é desse jeito
    // setList(await sqlite.query('SELECT * FROM audios'));
    setAtualiza(new Date());
  }

  async function update(id_audio) {
    await sqlite.query(
      `UPDATE audios SET title="${nome}" WHERE id_audio = ${id_audio}`
    );
    setAtualiza(await sqlite.query("SELECT * FROM audios"));
  }

  async function onHandleChange({ leftPosition, rightPosition }) {
    setTrimmer({
      trimmerRightHandlePosition: rightPosition,
      trimmerLeftHandlePosition: leftPosition,
    });
  }

  async function onStartPlay() {
    setRecording(true);
    const msg = await audioRecorderPlayer.startPlayer(data.caminho);
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

  return (
    <View style={Styles.linha3}>
      <TouchableOpacity
        onPress={() => setCliqueLista(data.id_audio)}
        style={[
          Styles.backg2,
          cliqueLista === data.id_audio ? Styles.backg : false,
        ]}
      >
        <Text style={Styles.title}>{data.title}</Text>

        <View style={Styles.linha4}>
          <Text style={Styles.subtext}>{data.data}</Text>
          <Text style={Styles.subtext}>{data.hora}</Text>
          <Text style={Styles.subtext}>{data.tamanho}</Text>

          <View style={Styles.linha5}>
            <TouchableOpacity onPress={() => setModalVisibleIcon(true)}>
              <Entypo name="dots-three-vertical" size={25} color={"#3B3355"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModal(true)}>
              <Feather name="scissors" size={25} color={"#3B3355"} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.linha4}>
          <Text style={Styles.tag}>{data.tags} </Text>

          <Text style={Styles.time}>{data.duracao}</Text>
        </View>

        <View style={Styles.linhav} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleIcon}
          enum="overFullScreen"
          onRequestClose={() => {
            setModalVisibleIcon(!setModalVisibleIcon);
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => setModalVisibleIcon(!modalVisibleIcon)}
          >
            <View style={Styles.modalOpen2}>
              <View style={Styles.modalView2}>
                <TouchableOpacity
                  style={Styles.buttonClose}
                  onPress={() => setModalVisibleIcon(false)}
                >
                  <LinearGradient
                    colors={["#BFCDE0", "#5D5D81"]}
                    style={Styles.buttonCloseStyles}
                  >
                    <AntDesign name="close" size={20} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>

                <Text style={Styles.modalText}>Propriedades</Text>

                <TextInput
                  onChangeText={(tex) => {
                    setNome(tex);
                  }}
                  style={Styles.input}
                  placeholder="Nome"
                />

                <View style={Styles.linhadelete}>
                  <TouchableOpacity onPress={() => update(data.id_audio)}>
                    <LinearGradient
                      colors={["#BFCDE0", "#5D5D81"]}
                      style={Styles.salvar}
                    >
                      <Text style={Styles.salvarText}>Editar</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => deleteId(data.id_audio)}>
                    <LinearGradient
                      colors={["#BFCDE0", "#5D5D81"]}
                      style={Styles.cancelar}
                    >
                      <MaterialIcons name="delete" size={25} color="#fff" />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          enum="overFullScreen"
          onRequestClose={() => {
            setModal(!setModal);
          }}
        >
          <TouchableWithoutFeedback onPress={() => setModal(!modal)}>
            <View style={Styles.modalOpen}>
              <View style={Styles.modalView}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Trimmer
                    onHandleChange={onHandleChange}
                    totalDuration={position.currentDurationSec}
                    trimmerLeftHandlePosition={
                      trimmer.trimmerLeftHandlePosition
                    }
                    trimmerRightHandlePosition={
                      trimmer.trimmerRightHandlePosition
                    }
                    tintColor="#3B3355"
                    markerColor="#5D5D81"
                    trackBackgroundColor="#BFCDE0"
                    trackBorderColor="##5D5D81"
                    scrubberColor="#b7e778"
                    maximumZoomLevel={80}
                    zoomMultiplier={-70}
                    initialZoomValue={0.7}
                  />
                </View>

                <View style={Styles.editor}>
                  <TouchableOpacity
                    style={Styles.pause}
                    onPress={recording ? onPausePlay : onStartPlay}
                  >
                    {recording ? (
                      <Foundation name="pause" size={50} color={"#3B3355"} />
                    ) : (
                      <AntDesign name="play" size={50} color={"#3B3355"} />
                    )}
                  </TouchableOpacity>
                </View>

                <Text style={Styles.tempo}>{data.duracao}</Text>

                <View style={Styles.linhabt}>
                  <TouchableOpacity
                    style={Styles.back}
                    onPress={() => setModal(false)}
                  >
                    <Text style={Styles.salvarText}>Back</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={Styles.back}
                    onPress={() => update(data.id_audio)}
                  >
                    <Text style={Styles.salvarText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </TouchableOpacity>
    </View>
  );
}
