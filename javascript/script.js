//funçao para o desaparecimento da instruçao de dentro da aba unidades 
function instrucao(){
    //variavel do section
    const instrucao = document.getElementById('blu');
    //variavel da imagem da seta que vai sumir
    const imagem = document.getElementById('I1');
    //variavel do texto que vai sumir
    const explicacao = document.getElementsByClassName('some');

    instrucao.style.opacity = '1';
    imagem.remove();
    //comando para remover elementos com a mesma classe
    const elementos = Array.from(explicacao);
    elementos.forEach(elemento => {
        elemento.remove();}
    );
}
