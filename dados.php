<?php 
//variaveis de conexao
$servername = "sql108.byethost7.com";
$username = "b7_37667932";        
$password = "39087326";      
$dbname = "b7_37667932_academia_energize";
//comando para conectar
$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //recebmento dos dados
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $cpf = $_POST['CPF'];
    $tel = $_POST ['tele'];
    $sexo = $_POST ['sexo'];
    $data = $_POST ['data'];
    $pcd = $_POST ['pcd'];
    $plano = $_POST ['planoaca'];
    $local = $_POST ['cidade'];
    //envio dos dados para o banco de dados
    $query = $conn->prepare("INSERT INTO cliente (nome, email, CPF, telefone, sexo, data_nasc, pcd, plano, localidade) VALUES ('$nome', '$email', '$cpf', '$tel', '$sexo', '$data', '$pcd', '$plano', '$local')");
    $query->execute();
    //comando para finalizar a conexao
$conn -> close();
}
//comando para enviar o usuario para outra aba 
header("Location: concluido.html");
exit;
?>