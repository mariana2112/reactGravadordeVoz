import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Ouvir() {
  const navegation = useNavigation();
  const inicio = () => {
    navegation.goBack();
  };
  return <View></View>;
}
