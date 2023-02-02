import SQLite from "react-native-sqlite-storage";

// Base de dados dos modulos
import audio from "../data/audio";

SQLite.DEBUG(false);
SQLite.enablePromise(true);

const database_name = "eba.db"; // mudar nome de acordo com o projeto
const database_version = "1.0";
const database_displayname = "Eba"; // mudar nome de acordo com o projeto
const database_size = 200000;

var db;

class Database {
  //Metodo construtor, é chamado sempre que a classe é instanciada,
  //iniciando o banco de dados no processo
  constructor() {
    // this.initDB();
  }
  //Inicia o baco de dados
  initDB() {
    return new Promise((resolve) => {
      SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size
      )
        .then((DB) => {
          db = DB;
          this.createDatabase(); // Sempre que inicia ele chama a função para criar o banco
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  //Fecha o banco de dados
  closeDatabase() {
    db.close()
      .then((status) => {})
      .catch((error) => {
        this.errorCB(error);
      });
  }

  async query(query) {
    return new Promise((resolve, reject) => {
      var resul = [];

      db.transaction((tx) => {
        tx.executeSql(query).then(([tx, results]) => {
          if (query.includes("SELECT")) {
            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              resul.push(row);
            }
            resolve(resul);
          } else {
            resolve(results);
          }
        });
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  escapeString(string) {
    let aux = string;

    if (typeof aux === "string") {
      aux = aux.replace(/'/g, "''");
      aux = aux.replace(/"/g, '""');
    }
    return aux;
  }

  //Cria o banco de dados, caso ele já não exista
  createDatabase() {
    db.transaction((tx) => {
      //Exmplo de criação de tabela no banco de dados
      //Sempre criar utilizando a função CREATE TABLE IF NOT EXISTS,
      //assim ele não tenta criar novamente caso ela já exista
      /*
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Objetos (id_objeto INTEGER PRIMARY KEY AUTOINCREMENT' +
          ', tipo VARCHAR(300), data_criacao DATETIME, ultima_alteracao DATETIME)',
      );
      */
      //Cada nova tabela a ser criada é só utilizar a função acima

      audio.createTable(tx);
    }).catch((error) => {
      console.log("Query error: ", error);
    });
  }
}
export default new Database();
