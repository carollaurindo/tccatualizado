const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.urlencoded({ extended: false }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0502',
  database: 'bancoMSH'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL');

  // Verifica se a tabela de usuários existe, caso não exista, cria a tabela
  const createTableSql = `CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(16) NOT NULL
  )`;

  db.query(createTableSql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Tabela de usuários verificada/criada com sucesso');
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sql = `SELECT * FROM usuarios WHERE email = '${email}' AND senha = '${password}'`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      res.redirect('/index2.html');
    } else {
      res.sendFile(__dirname + '/index.html');
    }
  });
});

app.get('/index2.html', (req, res) => {
  res.send('Bem-vindo à página principal!');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/cadastro', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const selectSql = `SELECT * FROM usuarios WHERE email = '${email}' AND senha = '${password}'`;
  db.query(selectSql, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      res.redirect('/login.html');
    } else {
      const insertSql = `INSERT INTO usuarios (nome, email, senha) VALUES ('${nome}', '${email}', '${password}')`;
      db.query(insertSql, (err, result) => {
        if (err) {
          throw err;
        }
        res.redirect('/index.html');
      });
    }
  });
});

app.get('/login', (req, res) => {
  res.send('Bem-vindo à página principal!');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});