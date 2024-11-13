# **Back**
**// Dependencias a serem instaladas dentro de back:
// npm init
// npm i express cors mysql
// npm install body-parser
os recursos instalados atraves dos comandos devem estar dentro da pasta back apenas**
## src "pasta dentro de back"
## connect "pasta dentro do src, connect.js deve estar aqui dentro"
### banco.js "connect.js"
```
const mysql = require('mysql')

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'rh_empresa'
})

module.exports = con;
```
## controllers "pasta dentro da pasta src, os arquivos clientes.js, telefone.js, quartos.js, reservas.js, estacionamento.js devem estar aqui dentro"
### controllerCargos.js
```
const con = require('../connect/banco');

const create = (req, res) => {
    let nome_cargo = req.body.nome_cargo;

    let query = 'INSERT INTO cargos (nome_cargo) VALUES';
    query += `('${nome_cargo}')`;

    con.query(query, (err, result)=> {
        if(err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM cargos', (err, result) => {
        if(err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    let id = Number(req.params.id)
    let nome_cargo = req.body.nome_cargo;

    let query = `UPDATE cargos SET nome_cargo = '${nome_cargo}' WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id = Number(req.params.id)
    const query = 'DELETE FROM cargos WHERE id = ?'
    con.query(query, [id], (err,result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deletar
}
```

### controllerDepartamentos.js
```
const con = require('../connect/banco');

const create = (req, res) => {
    let nome = req.body.nome;

    let query = 'INSERT INTO departamentos (nome) VALUES';
    query += `('${nome}')`;

    con.query(query, (err, result)=> {
        if(err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM departamentos', (err, result) => {
        if(err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    let id = Number(req.params.id)
    let nome = req.body.nome;

    let query = `UPDATE departamentos SET nome = '${nome}' WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id = Number(req.params.id)
    const query = 'DELETE FROM departamentos WHERE id = ?'
    con.query(query, [id], (err,result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deletar
}
```

### controllerFuncionarios.js
```
const con = require('../connect/banco');

const create = (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let telefone = req.body.telefone;
    let data_admissao = req.body.data_admissao;
    let departamento_id = req.body.departamento_id;
    let cargo_id = req.body.cargo_id;

    let query = 'INSERT INTO funcionarios (nome, email, telefone, data_admissao, departamento_id, cargo_id) VALUES';
    query += `('${nome}', '${email}', '${telefone}', '${data_admissao}', '${departamento_id}', '${cargo_id}')`;

    con.query(query, (err, result)=> {
        if(err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM funcionarios', (err, result) => {
        if(err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    let id = Number(req.params.id)
    let nome = req.body.nome;
    let email = req.body.email;
    let telefone = req.body.telefone;
    let data_admissao = req.body.data_admissao;
    let departamento_id = req.body.departamento_id;
    let cargo_id = req.body.cargo_id;

    let query = `UPDATE funcionarios SET nome = '${nome}', email = '${email}', telefone = '${telefone}', data_admissao = '${data_admissao}', departamento_id = ${departamento_id}, cargo_id = ${cargo_id} WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id = Number(req.params.id)
    const query = 'DELETE FROM funcionarios WHERE id = ?'
    con.query(query, [id], (err,result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deletar
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

app.listen(2000, ()=>{
    console.log("Servidor rodando na porta 2000")
})
```

### routes.js "dentro da pasta src apenas e não dentro de controllers ou connect"
```
const express = require('express')
const routes = express.Router()

const funcionarios = require('./controller/controllerFuncionarios')
const departamentos = require('./controller/controllerDepartamentos')
const cargos = require('./controller/controllerCargos')

routes.post('/funcionarios', funcionarios.create)
routes.get('/funcionarios', funcionarios.read)
routes.put('/funcionarios/:id', funcionarios.update)
routes.delete('/funcionarios/:id', funcionarios.deletar)

routes.post('/departamentos', departamentos.create)
routes.get('/departamentos', departamentos.read)
routes.put('/departamentos/:id', departamentos.update)
routes.delete('/departamentos/:id', departamentos.deletar)

routes.post('/cargos', cargos.create)
routes.get('/cargos', cargos.read)
routes.put('/cargos/:id', cargos.update)
routes.delete('/cargos/:id', cargos.deletar)

module.exports = routes
```

# Banco "fora de Back"
### banco.sql "dentro de banco"
**Não é necessario pegar está parte daqui pois você tambem pode pegar ela neste link do github** [https://github.com/Lucaspaiva00/julia_calhau-2024/tree/main/2DES/03-pbe1/aula10](https://github.com/Lucaspaiva00/julia_calhau-2024/tree/main/2DES/03-pbe1/aula11)
```
-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS rh_empresa;
USE rh_empresa;

-- Criação da Tabela de Departamentos
CREATE TABLE IF NOT EXISTS departamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL
);

-- Inserção de Departamentos
INSERT INTO departamentos (nome) VALUES 
    ('TI'),
    ('Recursos Humanos'),
    ('Financeiro'),
    ('Marketing'),
    ('Vendas');

-- Criação da Tabela de Cargos
CREATE TABLE IF NOT EXISTS cargos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_cargo VARCHAR(255) NOT NULL
);

-- Inserção de Cargos
INSERT INTO cargos (nome_cargo) VALUES 
    ('Analista de Sistemas'),
    ('Gerente de TI'),
    ('Assistente Administrativo'),
    ('Coordenador de Marketing'),
    ('Vendedor');

-- Criação da Tabela de Funcionários
CREATE TABLE IF NOT EXISTS funcionarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    telefone VARCHAR(15),
    data_admissao DATE,
    departamento_id INT,
    cargo_id INT,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id),
    FOREIGN KEY (cargo_id) REFERENCES cargos(id)
);

-- Inserção de Funcionários
INSERT INTO funcionarios (nome, email, telefone, data_admissao, departamento_id, cargo_id) VALUES
    ('João Silva', 'joao.silva@email.com', '1234567890', '2022-03-15', 1, 1), -- TI, Analista de Sistemas
    ('Maria Oliveira', 'maria.oliveira@email.com', '2345678901', '2020-06-01', 2, 3), -- RH, Assistente Administrativo
    ('Carlos Pereira', 'carlos.pereira@email.com', '3456789012', '2021-09-23', 3, 4), -- Financeiro, Coordenador de Marketing
    ('Fernanda Souza', 'fernanda.souza@email.com', '4567890123', '2023-01-10', 4, 2), -- Marketing, Gerente de TI
    ('Roberto Lima', 'roberto.lima@email.com', '5678901234', '2022-11-25', 5, 5); -- Vendas, Vendedor

```

**use o comando node server.js apos isso dentro do prompt de comando,se não estiver na pasta de Back digite cd Back no prompt e depois coloque o código node server.js**

