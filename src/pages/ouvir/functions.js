import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import Styles from "./styles";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

export function Navegar(navigation) {
  navigation.navigate("AppInicio");
}
const [modalVisible, setModalVisible] = useState(false);
const [modalVisibleTwo, setModalVisibleTwo] = useState(false);

export function Item({ data }) {
  return (
    <View style={Styles.linha3}>
      <Text style={Styles.title}>{data.title}</Text>

      <View style={Styles.linha4}>
        <Text style={Styles.subtext}>{data.data_hora}</Text>
        <Text style={Styles.subtext}>{data.hora}</Text>
        <Text style={Styles.subtext}>{data.tamanho}</Text>

        <View style={Styles.linha5}>
          <Entypo name="dots-three-vertical" size={25} color={"#3B3355"} />
          <Feather name="scissors" size={25} color={"#3B3355"} />
        </View>
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
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <TouchableOpacity
                style={Styles.btdelete}
                onPress={() => RemoveElement()}
              >
                <Text style={Styles.delete}>Deletar</Text>
                <Icon
                  name="delete"
                  size={20}
                  color="white"
                  style={Styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <View style={Styles.linha4}>
        <TouchableOpacity on>
          <Text style={Styles.tag}>{data.tags}</Text>
        </TouchableOpacity>
        <Text style={Styles.time}>{data.duracao}</Text>
      </View>

      <View style={Styles.linhav} />
    </View>
  );
}
