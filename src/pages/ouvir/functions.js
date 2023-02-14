import React, { useState, useEffect } from "react";
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
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import sqlite from "../../classes/sqlite";

export function Navegar(navigation) {
  navigation.navigate("Principal");
}

export function Item({ data }) {
  const [modalVisibleIcon, setModalVisibleIcon] = useState(false);
  const [nome, setNome] = useState("");

  const [list, setList] = useState([]);

  async function deleteId(id_audio) {
    await sqlite.query(`DELETE FROM audios WHERE id_audio = ${id_audio}`);
    console.log(await sqlite.query("SELECT * FROM audios"));
  }

  return (
    <View style={Styles.linha3}>
      <Text style={Styles.title}>{data.title}</Text>

      <View style={Styles.linha4}>
        <Text style={Styles.subtext}>{data.data_hora}</Text>
        <Text style={Styles.subtext}>{data.hora}</Text>
        <Text style={Styles.subtext}>{data.tamanho}</Text>

        <View style={Styles.linha5}>
          <TouchableOpacity onPress={() => setModalVisibleIcon(true)}>
            <Entypo name="dots-three-vertical" size={25} color={"#3B3355"} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="scissors" size={25} color={"#3B3355"} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.linha4}>
        <Text style={Styles.tag}>{data.tags}</Text>
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
          <View style={Styles.modalOpen}>
            <View style={Styles.modalView}>
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
                <TouchableOpacity>
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
    </View>
  );
}
