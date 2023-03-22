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
    bottom: 10,
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
    flex: 1,
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
  botao: {
    width: 50,
    height: 50,
    color: "red",
    top: 50,
  },
  modalOpen: {
    flex: 1,
    width: 380,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalOpen2: {
    flex: 1,
    width: 380,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonClose: {
    position: "absolute",
    left: 350,
    top: -10,
  },

  buttonCloseStyles: {
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  icone: {
    color: "white",
  },

  modalView: {
    backgroundColor: "white",
    width: 375,
    height: 350,
    bottom: -410,
  },

  modalView2: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 300,
    height: 200,
    alignItems: "center",
  },

  modalText: {
    fontFamily: "SofiaSans-Light",
    marginTop: "10%",
    marginBottom: "5%",
    fontSize: 16,
    color: "#3B3355",
    fontWeight: "600",
  },

  input: {
    fontFamily: "SofiaSans-Light",
    marginBottom: "10%",
    borderWidth: 1,
    borderColor: "#3B3355",
    padding: 10,
    borderRadius: 5,
    width: 262,
    height: 47,
    color: "#3B3355",
    fontSize: 16,
    fontWeight: "600",
  },

  salvarText: {
    fontFamily: "SofiaSans-Light",
    color: "#fff",
  },

  cancelar: {
    height: 30,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  salvar: {
    height: 30,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
  },

  back: {
    flex: 1,
    borderRadius: 25,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
    backgroundColor: "#3B3355",

    bottom: 180,
  },

  linhadelete: {
    flexDirection: "row",
  },
  backg: {
    backgroundColor: "#dddd",
    marginRight: 12,
  },

  linhabt: {
    flexDirection: "row",
    top: 130,
    marginRight: 25,
  },
  backg2: {
    backgroundColor: "white",
  },
  tempo: {
    fontFamily: "SofiaSans",
    fontSize: 30,
    fontWeight: "600",
    color: "#3B3355",
    top: -98,
    marginLeft: 40,
  },
  linhadelete2: {
    flex: 1,
    flexDirection: "row",
    marginTop: "-22%",
  },

  editor: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  pause: {
    bottom: 50,
    marginLeft: 110,
  },
});

export default Styles;
