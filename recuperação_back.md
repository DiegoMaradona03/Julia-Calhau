# **Back**
**// Dependencias a serem instaladas dentro de back:
// npm init
// npm i express cors mysql
// npm install body-parser
os recursos instalados atraves dos comandos devem estar dentro da pasta back apenas**
## src "pasta dentro de back"
## connect "pasta dentro do src, connect.js deve estar aqui dentro"
### connect.js
```
// Chamando as dependências
const mysql = require('mysql')

// Configuração da conexão com o Banco de Dados
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'StockCar'
});

module.exports = {con}
```
## controllers "pasta dentro da pasta src, os arquivos clientes.js, telefone.js, quartos.js, reservas.js, estacionamento.js devem estar aqui dentro"
### clientes.js
```
const con = require('../connect/connect').con;

const create = (req, res) => {
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let endereco = req.body.endereco;
    let data_nascimento = req.body.data_nascimento;
    let data_cadastro = req.body.data_cadastro;


    //Conexão com o banco de dados
    let query = `INSERT INTO clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES`
    query += `('${nome}','${cpf}','${email}','${endereco}','${data_nascimento}','${data_cadastro}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM clientes', (err, result) => {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = Number(req.params.id);
    con.query(`DELETE FROM clientes WHERE cliente_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;
    const query = `UPDATE clientes SET nome = '${nome}', cpf = '${cpf}', email = '${email}', endereco = '${endereco}', data_nascimento = '${data_nascimento}', data_cadastro = '${data_cadastro}' WHERE cliente_id = '${id}'`;
    con.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    })
}

module.exports = {
    create,
    read,
    deletar,
    update
}
```

### telefone.js
```
const con = require('../connect/connect').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let numero = req.body.numero;
    let tipo = req.body.tipo;

    //Conexão com o banco de dados
    let query = `INSERT INTO telefone (cliente_id, numero, tipo) VALUES`
    query += `('${cliente_id}','${numero}','${tipo}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = Number(req.params.id);
    con.query(`DELETE FROM telefone WHERE telefone_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, cliente_id, numero, tipo } = req.body;
    const query = `UPDATE telefone SET cliente_id = '${cliente_id}', numero = '${numero}', tipo = '${tipo}' WHERE telefone_id = '${id}'`;
    con.query(query, [cliente_id, numero, tipo, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    })
}

module.exports = {
    create,
    read,
    deletar,
    update
}
```

### carros.js
```
const con = require('../connect/connect').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.email;
    let fabricacao_veiculo = req.body.fabricacao_veiculo;

    //Conexão com o banco de dados
    let query = `INSERT INTO carros (cliente_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo) VALUES`
    query += `('${cliente_id}','${marca_veiculo}','${modelo_veiculo}','${ano_veiculo}','${fabricacao_veiculo}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM carros', (err, result) => {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = Number(req.params.id);
    con.query(`DELETE FROM carros WHERE carros_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, cliente_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo } = req.body;

    const query = `UPDATE carros SET cliente_id = '${cliente_id}', marca_veiculo = '${marca_veiculo}', modelo_veiculo = '${modelo_veiculo}', ano_veiculo = '${ano_veiculo}', fabricacao_veiculo = '${fabricacao_veiculo}' WHERE carros_id = '${id}'`;
    con.query(query, [cliente_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    })
}

module.exports = {
    create,
    read,
    deletar,
    update
}
```

### server.js "dentro de back apenas e fora de todas as outras pastas"
**(atenção!!! se você criou em um outro código de back-end com o mesmo numero que você estiver pondo neste código pode ser que não funcione caso o servidor do outro código ainda esteja rodando, se quiser por o mesmo numero sem dar este erro é necessario ir no código do outro server.js anterior e ir no prompt de comando apertando as teclas Ctrl + " apertar dentro do prompt de comando Ctrl + c para desligar o outro servidor)**
```
const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3005, () => {
    console.log('Servidor rodando na porta 3005')
})
```

### routes.js "dentro da pasta src apenas e não dentro de controllers ou connect"
```
// Dependências para funcionar
const express = require('express');
const router = express.Router();

const clientes = require('./controllers/clientes');
const telefone = require('./controllers/telefone');
const carros = require('./controllers/carros');

// Rota (Endpoint) de teste
const teste = (req, res) => {
    res.json("API respondendo com sucesso!");
}

// Rotas para clientes
router.get('/', teste);
router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes', clientes.update);
router.delete('/clientes/:id', clientes.deletar);

// Rotas para telefone
router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone', telefone.update);
router.delete('/telefone/:id', telefone.deletar);

// Rotas para carros
router.post('/carros', carros.create);
router.get('/carros', carros.read);
router.put('/carros', carros.update);
router.delete('/carros/:id', carros.deletar);

module.exports = router;
```

# Banco "fora de Back"
### banco.sql "dentro de banco"
**Não é necessario pegar está parte daqui pois você tambem pode pegar ela neste link do github** https://github.com/Lucaspaiva00/julia_calhau-2024/tree/main/2DES/03-pbe1/aula10
```
DROP DATABASE IF EXISTS StockCar;
CREATE DATABASE IF NOT EXISTS StockCar;
USE StockCar;

CREATE TABLE clientes(
    cliente_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    cpf varchar(11) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    endereco varchar(255) NOT NULL,
    data_nascimento date NOT NULL,
    data_cadastro date NOT NULL   
);

CREATE TABLE telefone (
    telefone_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cliente_id int(10) NOT NULL,
    numero varchar(20) NOT NULL,
    tipo enum('residencial', 'comercial', 'celular') NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

CREATE TABLE carros (
    carros_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    marca_veiculo VARCHAR(252) NOT NULL,
    modelo_veiculo VARCHAR(252) NOT NULL,
    ano_veiculo date NOT NULL,
    fabricacao_veiculo date NOT NULL,
    cliente_id int(10) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

```

**use o comando node server.js apos isso dentro do prompt de comando,se não estiver na pasta de Back digite cd Back no prompt e depois coloque o código node server.js**
