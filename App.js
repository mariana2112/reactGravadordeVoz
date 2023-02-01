import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DrawerNavigation from "./src/routes/drawer";
import SQLite from "react-native-sqlite-storage";

export default function App() {
  useEffect(() => {
    const createTable = async () => {
      try {
        const db = SQLite.openDatabase({
          name: "users",
          createFromLocation: 2,
        });
        // (() => {
        //   console.log("success");
        // }).catch((error) => {
        //   console.log(error);
        // });
        db.transaction((tx) => {
          tx.executeSql(`CREATE TABLE IF NOT EXISTS 
          audios
          (id INTEGER AUTOINCREMENT PRIMARY KEY NOT NULL,
            title TEXT,
            datahora TEXT,
            tamanho INTEGER,
            tags TEXT,
            duracao TEXT,
            caminho TEXT,
            )
          `);
        });
        createTable();
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigation></DrawerNavigation>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
