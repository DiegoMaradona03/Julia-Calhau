***O código está no final***

# **pattern**

## **O que é o Atributo pattern?**
O atributo pattern é usado em campos de entrada (<input>) para especificar uma expressão regular que define um formato aceitável para o valor inserido pelo usuário. 
Se o valor inserido não corresponder ao padrão definido, o formulário não será enviado e o navegador mostrará uma mensagem de erro.

## **Como Funciona:**
Quando você usa o atributo pattern, o navegador valida o valor do campo com base na expressão regular fornecida. 
Se o valor não corresponder ao padrão, o navegador exibe uma mensagem de erro e impede o envio do formulário.

### **Exemplo:**
input type="text" pattern="[A-Za-z]{3,}" title="O valor deve ter pelo menos 3 letras"

### **Neste exemplo:**
pattern="[A-Za-z]{3,}" especifica que o valor deve ter pelo menos 3 letras (maiúsculas ou minúsculas).

title="O valor deve ter pelo menos 3 letras" fornece uma mensagem de erro amigável que será exibida se o valor não corresponder ao padrão.

### **Outros Exemplos de Uso**
### Validação de Email
pattern="[a-zA-Z0-9._%+-]+@(gmail\\.com|googlemail\.com)"

### Número de Telefone
pattern="\(\d{2}\) \d{4,5}-\d{4}"

### Número de Documento de Identidade
Para um número de identidade com 9 dígitos, por exemplo, no formato "123-456-789"
pattern="\d{3}-\d{3}-\d{3}"

### URL
pattern="https?://.+"

### Número de Cartão de Crédito
pattern="\d{4} \d{4} \d{4} \d{4}"

### Código de Acesso com Letras e Números
pattern="[A-Za-z0-9]{6}"

### Endereço de IPv4
pattern="\b(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\b"

### CNPJ (Cadastro Nacional da Pessoa Jurídica)
pattern="\d{2}\\.\d{3}\\.\d{3}/0001-\d{2}"

### Número de Matrícula
pattern="\d{6}"

### Nome (verdadeiro)
pattern="[A-Za-z\s]+"

### CPF
pattern="\d{3}\\.\d{3}\\.\d{3}-\d{2}"

### RG
pattern="\d{2}\\.\d{3}\\.\d{3}-\d{1}"

## **1. Hífen (-)**
O hífen é usado dentro de um conjunto de caracteres ([]) para especificar um intervalo. Por exemplo:

[A-Z]: corresponde a qualquer letra maiúscula de A a Z.
[0-9]: corresponde a qualquer dígito de 0 a 9.
[A-Z0-9]: corresponde a qualquer letra maiúscula ou dígito.

Quando usado fora de um conjunto de caracteres, o hífen é interpretado como um literal. 
Por exemplo, no padrão \d{3}-\d{2}-\d{4}, o hífen é tratado como um caractere literal que deve estar presente entre os grupos de dígitos.

## **2. Barra Invertida (\\)**
A barra invertida é usada para escapar caracteres especiais e para introduzir sequências de caracteres especiais. 
Por exemplo:

\d: corresponde a qualquer dígito (equivalente a [0-9]).

\w: corresponde a qualquer caractere de palavra (letras, dígitos e o sublinhado, equivalente a [a-zA-Z0-9_]).

\s: corresponde a qualquer caractere de espaço em branco (espaço, tabulação, nova linha, etc.).

\\.: corresponde a um ponto literal (sem o escape, o ponto corresponde a qualquer caractere).

## **4. Parênteses (())**
Os parênteses são usados para agrupar partes da expressão regular e criar grupos. 
Grupos podem ser usados para aplicar quantificadores a uma parte da expressão ou para capturar partes da string que correspondem ao padrão.

### **Por exemplo:**

(abc)+: corresponde a uma ou mais ocorrências da sequência abc.

(\d{2}){3}: corresponde a três grupos de dois dígitos.

(\d{3}-)?\d{2}: Corresponde a dois dígitos, opcionalmente precedidos por três dígitos seguidos de um hífen.

(\d{3})-(\d{2}): Corresponde a três dígitos seguidos por um hífen e dois dígitos.


## **\d**
\d é um atalho para qualquer dígito. É equivalente a [0-9]. Ele é usado para corresponder a números de forma geral.

Exemplos de uso:

\d{4}: corresponde a exatamente quatro dígitos (por exemplo, 1234).
\d{2,4}: corresponde a entre dois e quatro dígitos.

## **\w**
Descrição: Corresponde a qualquer caractere de palavra (letras, dígitos e sublinhado). Equivalente a [a-zA-Z0-9_].
Exemplos de Uso:
\w+: Corresponde a uma ou mais ocorrências de caracteres de palavra (por exemplo, abc123).
\w{4}: Corresponde exatamente a quatro caracteres de palavra (por exemplo, abcd).

## **\s**
Descrição: Corresponde a qualquer caractere de espaço em branco (espaço, tabulação, nova linha, etc.). Equivalente a [ \t\n\r\f\v].
Exemplos de Uso:
\s+: Corresponde a um ou mais caracteres de espaço em branco
\s{2,4}: Corresponde a entre dois e quatro caracteres de espaço em branco

## **\\.**
Descrição: Corresponde a um ponto literal (.). Sem o escape, o ponto corresponde a qualquer caractere.
Exemplos de Uso:
\d{3}\\.: Corresponde a três dígitos seguidos por um ponto literal (por exemplo, 123.).
example\\.com: Corresponde ao texto literal example.com.


# **required maxlength**

## **Descrição**
O atributo maxlength define o número máximo de caracteres que o usuário pode inserir em um campo de entrada. 
Ele é usado para limitar a quantidade de dados que podem ser enviados para o servidor ou exibidos na interface do usuário.

## **Função**
Limitação de Entrada: Restringe o comprimento máximo dos dados que podem ser inseridos no campo.
Prevenção de Dados Excessivos: Evita que o usuário insira mais caracteres do que o permitido.

## **Uso**
Campo de Texto: input type="text" maxlength="10"

Área de Texto: textarea maxlength="200" /textarea

### **Exemplo:**
input type="text" id="username" name="username" maxlength="15"

Neste exemplo, o campo "Username" permite no máximo 15 caracteres.

## **Combinando required e maxlength**
Você pode usar required e maxlength juntos para garantir que o campo seja preenchido e que o valor inserido não exceda um determinado comprimento.

## **Exemplo:**
input type="password" id="password" name="password" required maxlength="20"

Neste exemplo, o campo "Password" deve ser preenchido e não pode ter mais do que 20 caracteres.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# **Código da aula 7 de Lima:**

## **Server.js**

```js
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

const create = (req, res) =>{
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let rg = req.body.rg;
    let telefone = req.body.telefone;
    let plano = req.body.plano;
    let pagamento = req.body.pagamento;
    let endereco = req.body.endereco;
    let bairro = req.body.bairro;
    let cidade = req.body.cidade;
    let datanascimento = req.body.datanascimento;

    //Conexão com o banco de dados
    let query = `INSERT INTO Livros (aluno) VALUE`
    query += `('${nome}','${cpf}','${rg}','${telefone}','${plano}','${pagamento}','${endereco}','${bairro}','${cidade}','${datanascimento}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.redirect("http://127.0.0.1:5500/Academia/front/erro.html")
        } else {
            res.redirect("http://127.0.0.1:5500/Academia/front/index.html")
        }
    })
}
```

## **CSS**

```css
*{
    margin: 0;
    padding: 0;
}
body{
    background-color: white;
}

.container{
    width: 100%;
    background: black;
    color: rgb(226, 226, 226);
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.div1{
    font-size: 22px;
    font-family: 'Courier New', Courier, monospace;
}

.container2{
    display: flex;
    justify-content: center;
    align-items: center;
}

.container3{
    display: grid;
}

.container_formulario{
    width: 35%;
    height: 100%;
    background: rgb(205, 204, 204);
    border-color: black;
    border: 10px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
}

input{
    width: 250px;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    border: none;
}

#botao{
    width: 100px;
    background: rgb(96, 96, 172);
    color: white;
    font-size: 14px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}
```

## **HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../CSS/AcademiaForm.css">
</head>
<body>
<div class="container2">
    <div class="container_formulario">
        <form action="http://localhost:3000/AcademiaForm" method="post">
            <form action="" method="">
                <label for="nome"><font color="Blue">Nome completo</font></label>
                <input type="text" id="nome" placeholder="Digite o seu nome: " required maxlength="50" pattern="[A-Za-z\s]+" required/>
                <br>

                <label for="datanascimento"><font color="Blue">Data de Nascimento</font></label>
                <input type="date" id="datanascimento" required/>
                <br>

                <label for="cpf"><font color="Blue">CPF</font></label>
                <input type="text" id="cpf" placeholder="Digite seu CPF: exemplo: 123.456.789-00" required maxlength="14" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required/>
                <br>

                <label for="rg"><font color="Blue">RG</font></label>
                <input type="text" id="rg" placeholder="Digite o seu RG, exemplo: 12.345.678-9" required maxlength="12" pattern="\d{2}\.\d{3}\.\d{3}-\d{1}" required/>
                <br>
                <label for="email"><font color="Blue">E-mail</font></label>
                <input type="email" id="email" name="email" placeholder="Digite seu e-mail" pattern="[a-zA-Z0-9._%+-]+@(gmail\.com|googlemail\.com)" required/>
                <br>

                <label for="telefone"><font color="Blue">Telefone</font></label>
                <input type="tel" id="telefone" placeholder="Digite seu telefone: (11) 98765-4321" required maxlength="15" pattern="\(\d{2}\) \d{4,5}-\d{4}" required/>
                <br>
                <fieldset>
                    <legend><font color="Blue">Plano de pagamento</font></legend>
                    <label for="1plano"><font color="Gray">R$: 80,00</font></label>
                    <input type="radio" id="1plano" name="plano" required/><br>

                    <label for="2plano"><font color="Gray">R$: 120,00</font></label>
                    <input type="radio" id="2plano" name="plano"/><br>
        
                    <label for="3plano"><font color="Gray">R$: 1200,00</font></label>
                    <input type="radio" id="3plano" name="plano"/><br>
                </fieldset>
                <br>

                <fieldset>
                    <legend><font color="Blue">Forma de Pagamento</font></legend>
                    <label for="credito"><font color="Gray">Cartão de crédito</font></label>
                    <input type="radio" id="credito" name="pagamento" required/><br>

                    <label for="debito"><font color="Gray">Cartão de débito</font></label>
                    <input type="radio" id="debito" name="pagamento"/><br>
        
                    <label for="pix"><font color="Gray">Pix</font></label>
                    <input type="radio" id="pix" name="pagamento"/><br>
                </fieldset>
                <br>

                <label for="endereco"><font color="Blue">Endereço</font></label>
                <input type="text" id="endereco" placeholder="Digite o seu Endereço" required/>
                <br>

                <label for="bairro">bairro</label>
                <select id="bairro" required>
                    <option>Roseira de cima</option>
                    <option>Roseira de baixo</option>
                    <option>Tanquinho</option>
                    <option>Centro</option>
                </select>
                <br>

                <label for="cidade">Cidade</label>
                <select id="cidade" required>
                    <option>Jaguariúna</option>
                    <option>Pedreira</option>
                    <option>Amparo</option>
                    <option>Arcacas</option>
                </select>
                <br>

            <input type="submit" value="Enviar" id="botao">

        </form>
    </div>
</div>
</body>
</html>
```
