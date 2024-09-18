# Back
## node_modules
## src
## connect(dentro do src)
### connect.js
```
// Chamando as dependências
const mysql = require('mysql')

// Configuração da conexão com o Banco de Dados
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
});

module.exports = {con}
```
## controllers(dentro do src)
### controllerAluno.js
```
// Chamando as dependências
const con = require('../connect/connect').con;

const create = (req, res) => {
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let rg = req.body.rg;
    let telefone = req.body.telefone;
    let plano = req.body.plano;
    let endereco = req.body.endereco;
    let cidade = req.body.cidade;
    let bairro = req.body.bairro;

    //Conexão com o banco de dados
    let query = `INSERT INTO aluno (nome, cpf, rg, telefone, plano, endereco, cidade, bairro) VALUE`
    query += `('${nome}','${cpf}','${rg}','${telefone}','${plano}','${endereco}','${cidade}','${bairro}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM aluno', (err, result) => {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM aluno WHERE alunoID = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json.end();
        } else {
            res.status(201).json(result)
        }
    })
}


module.exports = {
    create,
    read,
    deletar
}
```
### routes.js (dentro do src e fora das outras pastas)


## package-lock.json
## package.json
## server.js
```
// Dependencias framework's
const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

// Configuraçoes de saida para front
const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
```

# Banco
### banco.sql
```
CREATE DATABASE academia;
USE academia;
-- Criação das tabelas

-- Tabela: Alunos
CREATE TABLE aluno (
    alunoID INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(252) NOT NULL,
    cpf INT (11) NOT NULL,
    rg INT (9) NOT NULL,
    telefone INT (11) NOT NULL,
    plano VARCHAR (252) NOT NULL,
    endereco VARCHAR (252) NOT NULL,
    cidade VARCHAR (252) NOT NULL,
    Bairro VARCHAR (252) NOT NULL
);
```

# XAMPP
de start no mysql e vá em shell e use o comando mysql -u root e depois cole o seguinte código
```
CREATE DATABASE academia;
USE academia;
-- Criação das tabelas

-- Tabela: Alunos
CREATE TABLE aluno (
    alunoID INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(252) NOT NULL,
    cpf INT (11) NOT NULL,
    rg INT (9) NOT NULL,
    telefone INT (11) NOT NULL,
    plano VARCHAR (252) NOT NULL,
    endereco VARCHAR (252) NOT NULL,
    cidade VARCHAR (252) NOT NULL,
    Bairro VARCHAR (252) NOT NULL
);
```
após isso vá no insomnia e mude GET para POST e depois vá em body e coloque:
```
{
	"nome": "Lucas Paiva",
	"cpf": 12345678911,
	"rg": 509741468,
	"telefone": 19946468,
	"plano": "Plano A",
	"endereco": "João Beira",
	"bairro": "Centro",
	"cidade": "Jaguariuna"
}
```
depois ponhe na frente de POST
```
http://localhost:3000/aluno
```
