//home.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 11</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <input type="text" placeholder="Número 1" id="numero1">
        <input type="text" placeholder="Número 2" id="numero2">
        <br>
        <button onclick="somar()">Calcular</button>
        <p class="result" id="resultado"></p>

    </div>
    <script src="script.js"></script>
</body>

</html>

//style.css
body{
    background-color: white;
}

.container{
    width: 14.5%;
    height: 280px;
    padding: 5px;
    margin: 0 auto;
    background: black;
    border-radius: 15px;

}

input{
    width: 250px;
    height: 50px;
    border-radius: 15px;
    border-bottom: red;
    padding: 5px;
    margin: 5px;
}

button{
    width: 100px;
    height: 50px;
    border-radius: 15px;
    border-color: red;
    background-color: red;
    color: white;
}

//script.js
#resultado{
    color: aliceblue;
}

function somar() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var resultado = parseFloat(numero1) + parseFloat(numero2);
    document.getElementById('resultado').innerHTML = resultado;
}
