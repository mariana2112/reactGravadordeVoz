import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  img: {
    opacity: 0.7,
    flex: 0.5,
  },
  icon: {
    borderRadius: 100,
    backgroundColor: "#95a5ba",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 65,
    top: 260,
  },
  texto1: {
    color: "#BFCDE0",
    fontSize: 36,
    fontWeight: "600",
    position: "absolute",
    left: 120,
    top: 261,
  },
  text2: {
    color: "#3B3355",
    fontSize: 36,
  },
  circle: {
    alignSelf: "flex-end",
    marginRight: 15,
    marginTop: 40,
  },
});
export default Styles;
