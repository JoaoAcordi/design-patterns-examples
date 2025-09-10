class Database {
  constructor(connectionString) {
    if (Database._instance) {
      return Database._instance;
    }

    this.connectionString = connectionString;
    this.id = Math.random();
    console.log(`🔌 Nova conexão criada: ${this.id}`);

    Database._instance = this;
  }

  query(sql) {
    console.log(`Executando query [${sql}] na conexão ${this.id}`);
  }
}

const db1 = new Database("db://meu-banco");
db1.query("SELECT * FROM users");

const db2 = new Database("db://meu-banco");
db2.query("SELECT * FROM products");

console.log(db1 === db2);
