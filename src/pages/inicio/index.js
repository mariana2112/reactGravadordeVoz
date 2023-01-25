import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
} from "react-native";
import Styles from "./styles";
import Ouvir from "../ouvir";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import React, { useState } from "react";

export default function AppInicio() {
  const [modalVisible, setModalVisible] = useState(false);

  const [gravar, setGravar] = useState(true);
  const navegation = useNavigation();
  const Navegar = (tela) => {
    navegation.navigate(tela, {});
  };

  const countries = ["Sem Tag", "Estudo", "Faculdade", "Minhas Músicas"];

  function toggleTela(teste) {
    setGravar(teste);
  }

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
            <Text style={Styles.timer}>00:00</Text>
            <Text style={Styles.texto2}>Pronto para começar</Text>
          </View>
          <View style={Styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={Styles.centeredView2}>
                <View style={Styles.modalView}>
                  <Text style={Styles.modalText}>Salvar Gravação</Text>
                  <View>
                    <TextInput
                      style={Styles.input}
                      maxLength={50}
                      placeholder="Nome"
                    ></TextInput>

                    <SelectDropdown
                      data={countries}
                      onSelect={(selectedItem, index) => {
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
                      dropdownStyle={Styles.dropdown1DropdownStyle}
                      rowStyle={Styles.dropdown1RowStyle}
                      rowTextStyle={Styles.dropdown1RowTxtStyle}
                    />

                    <View style={Styles.alinhar}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <LinearGradient
                          style={Styles.salvar}
                          colors={["#BFCDE0", "#b0bdcf", "#96a2b3", "#697687"]}
                        >
                          <Text style={Styles.textStyle}>Salvar</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <LinearGradient
                          style={Styles.cancelar}
                          colors={["#5D5D81", "#3B3355"]}
                        >
                          <Text style={Styles.textStyle}>Cancelar</Text>
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
            onPress={() => setModalVisible(true)}
          >
            <LinearGradient style={Styles.icon} colors={["#BFCDE0", "#5D5D81"]}>
              <FontAwesome
                style={Styles.textStyle2}
                name="microphone"
                size={50}
                color="white"
              />
            </LinearGradient>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
