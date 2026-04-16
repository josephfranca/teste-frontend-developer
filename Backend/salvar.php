<?php
//Configuração para a conexão com o banco
$host = "localhost";
$usuario = "root"; //Usuário e senha padrão do xampp
$senha = "";
$banco = "pscortes_db"; //nome do banco

//String de conexão, tenta abrir a conexão usando os dados das variáveis
$conn = new mysqli($host, $usuario, $senha, $banco);

//Verificação da conexão
if ($conn->connect_error) {
    die("Falha de conexão: " . $conn->connect_error);
}

//Capturando os dados que estão no formulario html
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $whatsapp = $_POST['whatsapp'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];
}

//Query do sql para inserir os dados no banco
$sql = "INSERT INTO clientes (nome, whatsapp, email, mensagem)
VALUES ('$nome', '$whatsapp', '$email', '$mensagem')";

//executando a query e verifica o resultado
if ($conn->query($sql) === TRUE) {
    //Caso dê certo, vai subir um alert do javascript e voltando para a mesma página
    echo "<script>
        alert('Dados enviados com sucesso! Entraremos em contato em breve. ');
        window.location.href='../Frontend/index.html';
    </script>";
    exit;
} else {
    //Segue a lógica de cima, apenas mudando a mensagem.
    echo "<script>
        alert('Sentimos muito, algo deu errado mas não se preocupe, não foi sua culpa');
        window.location.href='index.html';
        </script>";
        
}

//Fechando a conexão após ter feito o que foi feito pra fazer
$conn->close();

?>