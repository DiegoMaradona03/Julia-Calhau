# **Back**
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
    database: 'hoteis'
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
    let id = req.params.id;
    con.query(`DELETE FROM clientes WHERE cliente_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json.end();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;

    const query = 'UPDATE clientes SET nome = ?, cpf = ?, email = ?, endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?';
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
    let id = req.params.id;
    con.query(`DELETE FROM telefone WHERE telefone_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json.end();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, cliente_id, numero, tipo } = req.body;

    const query = 'UPDATE telefone SET cliente_id = ?, numero = ?, tipo = ? WHERE telefone_id = ?';
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

### quartos.js
```
const con = require('../connect/connect').con;

const create = (req, res) => {
    let numero = req.body.numero;
    let andar = req.body.andar;
    let tipo = req.body.tipo;
    let valor_diaria = req.body.valor_diaria;
    let statusQuarto = req.body.statusQuarto;
    let cliente_id = req.body.cliente_id;

    //Conexão com o banco de dados
    let query = `INSERT INTO quartos (numero, andar, tipo, valor_diaria, statusQuarto, cliente_id) VALUES`
    query += `('${numero}','${andar}','${tipo}','${valor_diaria}','${statusQuarto}','${cliente_id}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM quartos', (err, result) => {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM quartos WHERE quarto_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json.end();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, numero, andar, tipo, valor_diaria, statusQuarto, cliente_id } = req.body;

    const query = 'UPDATE clientes SET numero = ?, andar = ?, tipo = ?, valor_diaria = ?, statusQuarto = ?, cliente_id = ? WHERE quarto_id = ?';
    con.query(query, [numero, andar, tipo, valor_diaria, statusQuarto, cliente_id, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    });
}

module.exports = {
    create,
    read,
    deletar,
    update
}
```

### reservas.js
```
const con = require('../connect/connect').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let quarto_id = req.body.quarto_id;
    let data_reserva = req.body.data_reserva;
    let data_entrada = req.body.data_entrada;
    let data_saida = req.body.data_saida;
    let valor_total = req.body.valor_total;
    let statusReserva = req.body.statusReserva;

    //Conexão com o banco de dados
    let query = `INSERT INTO reservas (cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva) VALUES`
    query += `('${cliente_id}','${quarto_id}','${data_reserva}','${data_entrada}','${data_saida}','${valor_total}','${statusReserva}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM reservas', (err, result) => {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM reservas WHERE reserva_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json.end();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva } = req.body;

    const query = 'UPDATE reservas SET cliente_id = ?, quarto_id = ?, data_reserva = ?, data_entrada = ?, data_saida = ?, valor_total = ?, statusReserva = ? WHERE reserva_id = ?';
    con.query(query, [cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    });
}

module.exports = {
    create,
    read,
    deletar,
    update
}
```

### estacionamento.js
```
const con = require('../connect/connect').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let veiculo_placa = req.body.veiculo_placa;
    let veiculo_marca = req.body.veiculo_marca;
    let veiculo_modelo = req.body.veiculo_modelo;
    let data_entrada = req.body.data_entrada;
    let data_saida = req.body.data_saida;

    //Conexão com o banco de dados
    let query = `INSERT INTO estacionamento (cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida) VALUES`
    query += `('${cliente_id}','${veiculo_placa}','${veiculo_marca}','${veiculo_modelo}','${data_entrada}','${data_saida}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM estacionamento', (err, result) => {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM estacionamento WHERE estacionamento_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json.end();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida } = req.body;

    const query = 'UPDATE estacionamento SET cliente_id = ?, veiculo_placa = ?, veiculo_marca = ?, veiculo_modelo = ?, data_entrada = ?, data_saida = ? WHERE estacionamento_id = ?';
    con.query(query, [cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    });
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

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
})
```

### routes.js "dentro da pasta src apenas e não dentro de controllers ou connect"
```
// Dependências para funcionar
const express = require('express');
const router = express.Router();

const clientes = require('./controllers/clientes');
const telefone = require('./controllers/telefone');
const quartos = require('./controllers/quartos');
const reservas = require('./controllers/reservas');
const estacionamento = require('./controllers/estacionamento');

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
// Rotas para quartos
router.post('/quartos', quartos.create);
router.get('/quartos', quartos.read);
router.put('/quartos', quartos.update);
router.delete('/quartos/:id', quartos.deletar);

// Rotas para reservas
router.post('/reservas', reservas.create);
router.get('/reservas', reservas.read);
router.put('/reservas', reservas.update);
router.delete('/reservas/:id', reservas.deletar);

// Rotas para estacionamento
router.post('/estacionamento', estacionamento.create);
router.get('/estacionamento', estacionamento.read);
router.put('/estacionamento', estacionamento.update);
router.delete('/estacionamento/:id', estacionamento.deletar);

module.exports = router;
```
