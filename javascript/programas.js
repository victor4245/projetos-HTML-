//ajuste das imagens e textos
//nome das variaveis='nome da atividade' é ajuste da imagem
//nome das variaveis='T+nome da atividade' é ajuste dos textos das imagens
window.addEventListener('scroll', () => {
    //função para aproximação das imagens
    //variaveis para controle de posiçao dentro da aba programas 
    const pilates = document.getElementById('pilates');   
    const fitdance = document.getElementById('fit');
    const hidro = document.getElementById('hidro');
    const boxe = document.getElementById('box');
    const jiu = document.getElementById('jui');
    const muay = document.getElementById('muay');
    const Tpilates = document.getElementById('Tpilates');   
    const Tfitdance = document.getElementById('Tfit');
    const Thidro = document.getElementById('Thidro');
    const Tboxe = document.getElementById('Tbox');
    const Tjiu = document.getElementById('Tjui');
    const Tmuay = document.getElementById('Tmuay');
    //variavel para captura da posiçao do scroll da barra vertical
    const scrollPosition = window.scrollY;
    //definiçao de valor padrao
    fitdance.style.left = '400px';
    pilates.style.left = '-400px';
    hidro.style.left = '400px';
    boxe.style.left = '-400px';
    jiu.style.left = '400px';
    muay.style.left = '-400px';
    Tfitdance.style.left = '-500px';
    Tpilates.style.left = '500px';
    Thidro.style.left = '-500px';
    Tboxe.style.left = '500px';
    Tjiu.style.left = '-500px';
    Tmuay.style.left = '500px';
    //desaparecimento da parte de muay tai 
    if (scrollPosition > 3000){
        muay.style.left = '-400px';
        Tmuay.style.left = '500px';
    }
    else if (scrollPosition > 2500){
        //aparecimento da parte do muay tai e desaparecimento da parte do jiu jitsu
        jiu.style.left = '400px';
        Tjiu.style.left = '-500px';
        muay.style.left = '50px';
        Tmuay.style.left = '0px';
    }
    else if (scrollPosition > 2000){
        //aparecimento da parte do jiu jitsu e desaparecimento da parte do boxe
        boxe.style.left = '-400px';
        Tboxe.style.left = '500px';
        jiu.style.left = '-50px';
        Tjiu.style.left = '0px';
    }
    else if (scrollPosition > 1500) {
        //aparecimento da parte do boxe e desaparecimento da parte da hidroginastica
        hidro.style.left = '400px';
        Thidro.style.left = '-500px';
        boxe.style.left = '50px';
        Tboxe.style.left = '0px';
    }
    else if (scrollPosition > 1000) {
        //aparecimento da parte da hidroginastica e desaparecimento da parte do pilates
        hidro.style.left = '-50px';
        Thidro.style.left = '0px';
        pilates.style.left = '-400px';
        Tpilates.style.left = '500px';
    }
    else if (scrollPosition > 500) {
        //aparecimento da parte do pilates e desaparecimento da parte do fit dance
        fitdance.style.left = '400px';
        Tfitdance.style.left = '-500px';
        pilates.style.left = '50px';
        Tpilates.style.left = '0px';
    }
    else if (scrollPosition > 5) {
        //aparecimento da parte do fit dance
        fitdance.style.left = '-50px';
        Tfitdance.style.left = '0px';
    }
    
});
    