import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
  PermissionsAndroid,
  Platform,
} from "react-native";
import Styles from "./styles";
import Ouvir from "../ouvir";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import InAppReview from "react-native-in-app-review";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import RNFS from "react-native-fs";
import sqlite from "../../classes/sqlite";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const audioRecorderPlayer = new AudioRecorderPlayer();

const arrayOptions = ["Sem Tag", "Estudo", "Faculdade", "Minhas Músicas"];

export default function AppInicio() {
  const [opcao, setOpcao] = useState();
  const [nome, setNome] = useState();
  const Navegar = (tela) => {
    navegation.navigate(tela, {});
  };
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
  const [gravar, setGravar] = useState(true);
  const navegation = useNavigation();
  const [frase, setFrase] = useState({
    inicio: "Pronto para começar",
    grav: "Gravando",
  });
  const [tempo, setTempo] = useState({
    recordSecs: 0,
    recordTime: "00:00:00",
  });
  const [gravando, setGravando] = useState(false);

  async function SalvarBanco() {
    const date = new Date().toLocaleString();
    await sqlite.query(
      `INSERT INTO audios (title, data_hora, tamanho, tags, duracao, caminho) VALUES ("${nome}", "date", "", "${opcao}", "${tempo.recordTime}", "") `
    );

    console.log(await sqlite.query("SELECT * FROM audios"));
  }

  async function onStartRecord() {
    setGravando(true);
    if (Platform.OS === "android") {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log("write external stroage", grants);

        if (
          grants["android.permission.WRITE_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants["android.permission.READ_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants["android.permission.RECORD_AUDIO"] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log("Permissions granted");
        } else {
          console.log("All required permissions not granted");
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener((e) => {
      setTempo({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
      return;
    });
    console.log(result);
  }

  async function onStopRecord() {
    setGravando(false);
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setTempo({
      recordSecs: 0,
      recordTime: tempo.recordTime,
    });

    await RNFS.copyFile(result, RNFS.DocumentDirectoryPath + "/test.mp4")
      .then((success) => {
        console.log("file moved!", success);
      })
      .catch((err) => {
        console.log("Error: " + err.message);
      });

    console.log("teste", result);

    setModalVisible(true);
  }

  function toggleTela(teste) {
    setGravar(teste);
  }

  const RatingBar = () => {
    return (
      <View style={Styles.ratingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <AntDesign
                name={item <= defaultRating ? "star" : "staro"}
                size={40}
                color="#BFCDE0"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.dois}>
        <TouchableOpacity onPress={() => toggleTela(true)}>
          <Text style={gravar ? Styles.text2 : Styles.text3}>Gravar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleTela(false)}>
          <Text style={gravar ? Styles.text3 : Styles.text2}>Ouvir</Text>
        </TouchableOpacity>
      </View>

      {!gravar ? (
        <Ouvir />
      ) : (
        <>
          <View style={Styles.aa}>
            <Text style={Styles.timer}>{tempo.recordTime}</Text>
            <Text style={Styles.texto2}>
              {gravando > 0 ? frase.grav : frase.inicio}
            </Text>
          </View>
          <View style={Styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={Styles.centeredView2}>
                <View style={Styles.modalView}>
                  <Text style={Styles.modalText}>Salvar Gravação</Text>
                  <View>
                    <TextInput
                      value={nome}
                      onChangeText={(tex) => {
                        setNome(tex);
                      }}
                      style={Styles.input}
                      maxLength={50}
                      placeholderTextColor="#c9c9c9"
                      placeholder="Nome"
                    />

                    <SelectDropdown
                      data={arrayOptions}
                      onSelect={(selectedItem, index) => {
                        setOpcao(selectedItem);
                        console.log(selectedItem, index);
                      }}
                      defaultButtonText={"Tag"}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                      rowTextForSelection={(item, index) => {
                        return item;
                      }}
                      buttonStyle={Styles.dropdown1BtnStyle}
                      buttonTextStyle={Styles.dropdown1BtnTxtStyle}
                      renderDropdownIcon={(isOpened) => {
                        return (
                          <Entypo
                            name={isOpened ? "chevron-up" : "chevron-down"}
                            color={"#3B3355"}
                            size={18}
                          />
                        );
                      }}
                      dropdownIconPosition={"right"}
                      dropdownStyle={Styles.colorClick}
                      rowStyle={Styles.corLinha}
                      rowTextStyle={Styles.corTextLinha}
                    />

                    <View style={Styles.alinhar}>
                      <TouchableOpacity
                        onPress={() => setModalVisibleTwo(true)}
                      >
                        <LinearGradient
                          style={Styles.salvar}
                          colors={["#BFCDE0", "#5D5D81"]}
                        >
                          <Text onPress={SalvarBanco} style={Styles.textStyle1}>
                            Salvar
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <LinearGradient
                          style={Styles.cancelar}
                          colors={["#5D5D81", "#3B3355"]}
                        >
                          <Text style={Styles.textStyle1}>Cancelar</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <View style={Styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisibleTwo}
              onRequestClose={() => {
                setModalVisible(!modalVisibleTwo);
              }}
            >
              <View style={Styles.centeredView3}>
                <View style={Styles.modalView}>
                  <TouchableOpacity
                    style={Styles.circle}
                    onPress={() => setModalVisibleTwo(false)}
                  >
                    <LinearGradient
                      style={Styles.btcircle}
                      colors={["#BFCDE0", "#b0bdcf", "#96a2b3", "#697687"]}
                    >
                      <Feather
                        style={Styles.xicon}
                        name="x"
                        size={30}
                        color="white"
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                  <Text style={Styles.modalText}>
                    Parabéns! Você gravou seu primeiro áudio!
                  </Text>
                  <View>
                    <Text style={Styles.textoAvalie}>
                      Nos avalie com 5 estrelas se estiver gostando do
                      aplicativo!
                    </Text>
                    <RatingBar />
                    <Text>
                      {defaultRating} / {Math.max.apply(null, maxRating)}
                    </Text>
                    <View style={Styles.alinhar}>
                      <TouchableOpacity
                        onPress={() => {
                          if (defaultRating >= 4) {
                            InAppReview.RequestInAppReview();
                            console.log(defaultRating);
                          } else {
                            setModalVisibleTwo(!modalVisibleTwo);
                            Alert.alert("Obrigada pela avaliação!");
                          }
                        }}
                      >
                        <LinearGradient
                          style={Styles.avaliar}
                          colors={["#BFCDE0", "#b0bdcf", "#96a2b3", "#697687"]}
                        >
                          <Text style={Styles.textStyle1}>Avaliar</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <TouchableOpacity
            style={Styles.icon}
            onPress={gravando ? onStopRecord : onStartRecord}
          >
            <LinearGradient style={Styles.icon} colors={["#BFCDE0", "#5D5D81"]}>
              {gravando ? (
                <Entypo
                  style={Styles.textStyle2}
                  name="controller-record"
                  size={50}
                  color={"#fff"}
                />
              ) : (
                <FontAwesome
                  style={Styles.textStyle2}
                  name="microphone"
                  size={50}
                  color="#fff"
                />
              )}
            </LinearGradient>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
