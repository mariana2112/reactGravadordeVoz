import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  touch: {
    marginRight: 90,
    alignSelf: "center",
  },

  touch2: {
    marginLeft: 90,
    alignSelf: "center",
  },
  gravar: {
    top: 80,
    fontFamily: "Sofia Sans",
    fontSize: 17,
    color: "#3B3355",
    fontWeight: "500",
    lineHeight: 20,
  },
  ouvir: {
    top: 60,
    fontFamily: "Sofia Sans",
    fontSize: 17,
    color: "#3B3355",
    fontWeight: "500",
    lineHeight: 20,
  },

  icon: {
    borderRadius: 100,
    backgroundColor: "#95a5ba",
    height: 90,
    width: 90,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 60,
  },
  texto2: {
    color: "grey",
    fontSize: 18,
    alignSelf: "center",
    top: 320,
    opacity: 0.6,
  },
  timer: {
    position: "absolute",
    bottom: 350,
    alignSelf: "center",
    fontFamily: "Sofia Sans",
    fontWeight: "500",
    fontSize: 50,
    lineHeight: 100,
    color: "#3B3355",
  },
});
export default Styles;
