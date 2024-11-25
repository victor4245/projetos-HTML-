//comando apra mudar foto das academias
function mudafoto(){
    //variavel da foto da academia
    const foto = document.getElementById('academia');
    //variavel para capturar o local escolhido 
    const local = document.getElementById('seleciona3').value;
    //variavel para o endereço da academia 
    const texto = document.getElementById('endereco');

    if(local == 'aguas'){
        foto.src = 'imagens/aguas.jpeg';
        texto.textContent = 'Av. Sibipiruna, S/N Sul (Águas Claras), Brasília - DF';
    }
    else if(local == 'EPTG'){
        foto.src = 'imagens/EPTG.jpeg';
        texto.textContent = 'Q. EPTG QE, 01 - CJ.A, LOTE 01 V. Tecnológica Qds. Econômicas Lúcio Costa (Guará), Brasília - DF';
    }
    else if(local == 'sudoeste'){
        foto.src = 'imagens/sudoeste.jpeg';
        texto.textContent = 'Quadra 08, S/N Setor Indústrias Gráficas, Brasília - DF';
    }
    else if(local == 'asa_norte'){
        foto.src = 'imagens/asa_norte.jpeg';
        texto.textContent = '516 Q SEPN - CONJUNTO E, QUADRA 516 Asa Norte, Brasília - DF';
    }
    else if(local == 'asa_sul'){
        foto.src = 'imagens/asa_sul.jpeg';
        texto.textContent = 'Q SHCS CR QD 513 Bloco C, 49 Asa Sul, Brasília - DF';
    }
    else{
        //imagem padrao 
        foto.src = 'imagens/images.png'
        texto.textContent = 'escolha uma unidade';
    }
}
//funções para estilização extra dos selects
function cor(){
    const select = document.getElementById('seleciona');
    const cor = select.value;

    if(cor == 'DF'){
        select.style.color = 'black';
    }
    else if(cor == 'none'){
        select.style.color = 'gray';
    }
}
function cor2(){
    const select = document.getElementById('seleciona2');
    const cor = select.value;

    if(cor == 'brb'){
        select.style.color = 'black';
    }
    else if(cor == 'none'){
        select.style.color = 'gray';
    }
}
function cor3(){
    const select = document.getElementById('seleciona3');
    const cor = select.value;

    if(cor == 'none'){
        select.style.color = 'gray';
    }
    else{
        select.style.color = 'black';
    }
}
function cor4(){
    const select = document.getElementById('planoacademia');
    const cor = select.value;

    if(cor == 'none'){
        select.style.color = 'gray';
    }
    else{
        select.style.color = 'black';
    }
}
//area para a apresentação dos planos
function escolha(){
    //variavel para captura do plano escolhido
    const dados = document.getElementById('planoacademia').value;
    //variavel do nome do plano
    const titulo = document.getElementById('titulo');
    //variavel do conteudo do plano
    const conteudo = document.getElementById('cont');

    if(dados == 'base'){
        titulo.textContent = 'PLANO BASE';
        conteudo.textContent = '·Acesso a todas as aulas coletivas\n·Acesso total a estrutura da academia com restrição de horários\n';
    }
    else if (dados == 'recorrencia'){
        titulo.textContent = 'PLANO RECORRÊNCIA';
        conteudo.textContent = '·Acesso a todas as aulas coletivas\n·Acesso total a estrutura da academia sem restrição de horários\n·Sem multas ou taxas de cancelamento';
    }
    else if (dados == 'fidelidade'){
        titulo.textContent = 'PLANO RECORRÊNCIA FIDELIDADE';
        conteudo.textContent = '·Acesso a todas as aulas coletivas\n·Acesso total a estrutura da academia sem restrição de horários\n·Sem multas ou taxas de cancelamento\n·Treino em todas as unidades Energize Gym\n·Juros zero por atraso no período máximo de 1 mês';
    }
    else if (dados == 'premium'){
        titulo.textContent = 'PLANO RECORRÊNCIA PREMIUM';
        conteudo.textContent = '·Acesso a todas as aulas coletivas\n·Acesso total a estrutura da academia sem restrição de horários\n·Sem multas ou taxas de cancelamento\n·Treino em todas as unidades Energize Gym\n·Juros zero por atraso no período máximo de 2 meses\n·Descontos exclusivos nas lojas de suplementos internas';
    }
    else{
        //texto padrao
        titulo.textContent = 'selecione um plano';
        conteudo.textContent = '...';
    }
}