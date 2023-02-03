import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    flex: 0.5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  letra: {
    color: "#3B3355",
    fontWeight: "500",
    fontSize: 17,
    fontFamily: "SofiaSans-VariableFont",
  },

  letra2: {
    fontWeight: "500",
    fontSize: 17,
    color: "#3B3355",
    opacity: 0.5,
    fontFamily: "SofiaSans-VariableFont",
  },

  body: {
    flex: 6,
  },

  bottom: {
    flex: 2.5,
  },

  text: {
    color: "white",
    fontSize: 12,
    borderWidth: 1,
    borderColor: "white",
    marginLeft: "5%",
    marginTop: "4%",
    fontFamily: "SofiaSans-VariableFont",
  },

  texto: {
    color: "white",
    fontSize: 12,
    borderWidth: 1,
    borderColor: "white",
    marginRight: 18,
    top: 8,
    fontFamily: "SofiaSans-VariableFont",
  },

  alinhar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },

  linha2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  linha3: {
    marginLeft: 20,
    marginRight: 10,
    marginTop: 1,
  },

  linha4: {
    flexDirection: "row",
  },

  linha5: {
    flexDirection: "row-reverse",
    marginRight: 240,
  },

  linhav: {
    backgroundColor: "#BFCDE0",
    height: 1,
    marginTop: -1,
    width: 335,
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    color: "black",
    fontFamily: "SofiaSans-VariableFont",
  },

  subtext: {
    fontSize: 10,
    fontWeight: "400",
    color: "black",
    lineHeight: 12,
    marginRight: 10,
    fontFamily: "SofiaSans-VariableFont",
  },

  time: {
    fontSize: 12,
    fontWeight: "400",
    color: "black",
    marginTop: "-3%",
    fontFamily: "SofiaSans-VariableFont",
  },

  tag: {
    fontSize: 12,
    fontWeight: "500",
    backgroundColor: "#3B3355",
    color: "#BFCDE0",
    borderRadius: 2,
    textAlign: "center",
    marginRight: 10,
    top: -11,
    fontFamily: "SofiaSans-VariableFont",
  },

  um: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    fontFamily: "SofiaSans-VariableFont",
  },
});

export default Styles;
