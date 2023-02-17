class audios {
  createTable(tx) {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS audios(
        id_audio INTEGER,
        data VARCHAR(20),
        hora VARCHAR(20),
        title VARCHAR(20),
        tamanho VARCHAR(20),
        tags VARCHAR(20),
        duracao VARCHAR(20),
        caminho VARCHAR(20),
       PRIMARY KEY(id_audio AUTOINCREMENT))
      `);
  }
}
export default new audios();
