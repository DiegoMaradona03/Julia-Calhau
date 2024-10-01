# HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio</title>
    <link rel ="stylesheet" href="Port.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <h1>Meu Portfólio</h1>
        <nav>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
    
    <section id = "sobre">
        <div class="container">
        <h1>Diego Maradona Preti Costa Figuerêdo</h1>
        <div class="sobre-mim">
            <img src="https://media.tenor.com/makoRL0gbkQAAAAM/scorpion-mortal-kombat.gif" alt="Foto do Autor" class="foto-perfil">
            <div class="sobre-informacoes">
                <h2>Sobre Mim</h2>
                <p> Turma de Desenvolvimento de Sistemas - 2º Semestre - Julia Calhau</p>
            </div>
        </div>
    </div>
    </section>

    <section id="projetos">
        <div class="container">
            <h2>Meus Projetos</h2>
            <div class="cards">
                <div class="card">
                    <h3>Aulas de LIMA</h3>
                    <p>Aulas sobre css e Html</p>
                </div>
                <div class="card">
                    <h3>Kahoot!</h3>
                    <p>Gameficação em sala de aula!</p>
                </div>
            </div>
        </div>
    </section>
    
    <section id="hobbies">
        <div class="container">
            <h2> Meus Hobbies</h2>
            <div class="hobbies">
                <div class="hobby">
                    <i class="fas fa-book"></i>
                    <h3>Leitura</h3>
                    <p> Ler livros sobre ficção cientifica </p>
                </div>
                <div class="hobby">
                    <i class="fas fa-gamepad"></i>
                    <h3>Jogar</h3>
                    <p> Jogar jogos eletrônicos</p>
                </div>
                <div class="hobby">
                    <i class="fas fa-camera"></i>
                    <h3>Fotografia</h3>
                    <p> Tirar fotos de momentos!</p>
                </div>
            </div>
        </div>

    </section>

    <section id="contato">
        <div class="container">
            <h2>Contato</h2>
            <form>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
                <label for="email">Email:</label>
                <input type="email" id="email"name="email" required>
                <label for="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 Meu Portifólio</p>
    </footer>   
</body>
</html>
```

# CSS
```
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background: #f4f4f4;
}
/* Cabeçalho */
header {
    background: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
}
header h1 {
    margin-bottom: 0.5rem;
}
nav ul {
    list-style: none;
    padding:0;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    color:#fff;
    text-decoration: none;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color:crimson;
    cursor: pointer;
}

/*Seções*/
section {
    padding: 2rem;
    margin: 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

h2 {
    margin-bottom: 1rem;
}

/*Sobre Mim */

.sobre-mim{
    display: flex;
    align-items: center;
    gap: 1rem;
}
.foto-perfil{
    width: 120px;
    height:120px;
    border-radius:50%;
    object-fit: cover;
    border: 4px solid #333
}
.sobre-informacoes {
    flex:1;
}
.sobre-informacoes h2 {
    margin-bottom: 0.5rem;
}
.sobre-informacoes p {
    font-size: 1rem;
    color: #555;
}
/*Projetos*/
.cards {
    display: flex;
    gap: 1rem;
}
.card{
    background: #f4f4f4;
    border-radius: 8px;
    padding: 1rem;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
}
.card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  
}

/*Hobbies*/
.hobbies {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.hobby {
    display: flex;
    align-items: center;
    background: #f4f4f4;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    gap: 1rem;
}
.hobby i {
    font-size: 2rem;
    color: #333;
}
.hobby h3 {
    margin-bottom: 0.5rem;
}
.hobby p {
    color: #555;
}

/*Formulario*/
form {
    display: grid;
    gap: 1rem;
}
label {
    font-weight: bold;
}
input, textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}
button {
    background: #333;
    color:#fff;
    border:none;
    padding: 0.7rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
}
button:hover {
    background: crimson;
}
/*Footer*/
footer{
    background:#333;
    color:#fff;
    text-align: center;
    padding: 1rem 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}
```
