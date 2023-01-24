import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  gravar: {
    fontFamily: "Sofia Sans",
    fontSize: 17,
    color: "#3B3355",
    fontWeight: "500",
    marginLeft: 76,
  },
  ouvir: {
    fontFamily: "Sofia Sans",
    fontSize: 17,
    color: "#3B3355",
    fontWeight: "500",
    marginRight: 76,
  },
  dois: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 82,
  },

  icon: {
    borderRadius: 100,
    height: 90,
    width: 90,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: 420,
  },
  texto2: {
    color: "grey",
    fontSize: 18,
    alignSelf: "center",
    top: 320,
    opacity: 0.6,
  },
  timer: {
    top: 310,
    alignSelf: "center",
    fontFamily: "Sofia Sans",
    fontWeight: "500",
    fontSize: 50,
    color: "#3B3355",
  },
});
export default Styles;
