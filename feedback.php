<?php 

$severname = "sql108.byethost7.com";
$username = "b7_37667932";
$password = "39087326";
$dbname = "b7_37667932_academia_energize";

$conn = new mysqli($severname, $username, $password, $dbname);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $cpf = $_POST['CPF'];
    $tele = $_POST['tele'];
    $msg = $_POST['mensagem'];

    $query = $conn->prepare("INSERT INTO duvidas(nome, email, CPF, telefone, mensagem) VALUES ('$nome', '$email','$cpf','$tele','$msg')");
    $query->execute();
    $conn->close();
}
header("Location: concluido2.html");
exit;