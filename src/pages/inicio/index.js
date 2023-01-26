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
import InAppReview from "react-native-in-app-review";
import React, { useState } from "react";

export default function AppInicio() {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

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
              <Entypo
                name="star-outlined"
                size={50}
                color="red"
                style={Styles.starIcon}
                source={item <= defaultRating ? require : require}
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

      <Text style={Styles.textStyle}>Classifique a sua experiência</Text>
      <RatingBar />
      <Text style={Styles.textStyle}>
        {defaultRating} / {Math.max.apply(null, maxRating)}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={Styles.buttonStyle}
        onPress={() => alert(defaultRating)}
      >
        <Text style={Styles.buttonTextStyle}>Obter Valor Selecionado</Text>
      </TouchableOpacity>

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
                      dropdownStyle={Styles.colorClick}
                      rowStyle={Styles.corLinha}
                      rowTextStyle={Styles.corTextLinha}
                    />

                    <View style={Styles.alinhar}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <LinearGradient
                          style={Styles.salvar}
                          colors={["#BFCDE0", "#b0bdcf", "#96a2b3", "#697687"]}
                        >
                          <Text style={Styles.textStyle1}>Salvar</Text>
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
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={Styles.centeredView3}>
                <View style={Styles.modalView}>
                  <Text style={Styles.modalText}>
                    Parabéns! Você gravou seu primeiro áudio!
                  </Text>
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
                      dropdownStyle={Styles.colorClick}
                      rowStyle={Styles.corLinha}
                      rowTextStyle={Styles.corTextLinha}
                    />

                    <View style={Styles.alinhar}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <LinearGradient
                          style={Styles.salvar}
                          colors={["#BFCDE0", "#b0bdcf", "#96a2b3", "#697687"]}
                        >
                          <Text style={Styles.textStyle1}>Salvar</Text>
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
