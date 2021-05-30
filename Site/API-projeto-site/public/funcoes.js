let login_usuario;
let nome_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    
    if (login_usuario == undefined)  {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = nome_usuario;
        validar_sessao();
    }
    
}

function verificar_card() {

    nome_usuario = sessionStorage.nome_usuario_meuapp;
    sobrenome_usuario = sessionStorage.sobrenome_usuario_meuapp;
    numeroCartao = sessionStorage.numeroCartao_meuapp;
    digitoCartao = sessionStorage.digitoCartao_meuapp;
    corCartao = sessionStorage.cor_cartao_meuapp;
    clube = sessionStorage.clube_meuapp;
    var cartao = document.getElementById("card");

    nome.innerHTML = `${nome_usuario} ${sobrenome_usuario}`;
    numero.innerHTML = `${numeroCartao} - ${digitoCartao}`;

    if (clube == "São Paulo FC"){
        logo.innerHTML = `<img src="https://logodownload.org/wp-content/uploads/2016/09/sao-paulo-logo-escudo-1.png" alt="">`
    }

    if (clube == "Palmeiras"){
        logo.innerHTML = `<img src="./img/palmares.png" alt="">`
        jogador.innerHTML = `<img src="./img/gustavo.png" alt="">`
    }

    if(corCartao == "laranja" || corCartao == "nenhum"){
        cartao.style = "background: linear-gradient(to bottom, #ff7400 80%, #cc5c00);"
        nome.style.color = "black";
        numero.style.color = "black";
        sinal.innerHTML = `<img src="./img/sinal preto.png" alt="">`;
    }

    if (corCartao == "verde"){
        cartao.style = "background: linear-gradient(to bottom, rgb(0, 209, 0) 80%, rgb(1, 167, 1))"
        nome.style.color = "black";
        numero.style.color = "black";
        sinal.innerHTML = `<img src="./img/sinal preto.png" alt="">`;
    }

    if (corCartao == "vermelho"){
        cartao.style = "background: linear-gradient(to bottom, rgb(231, 0, 0) 80%, rgb(187, 0, 0)"
        nome.style.color = "black";
        numero.style.color = "black";
        sinal.innerHTML = `<img src="./img/sinal preto.png" alt="">`;
    }

    if (corCartao == "preto"){
        nome.style.color = "white";
        numero.style.color = "white";
        cartao.style = "background: linear-gradient(to bottom, rgb(22, 22, 22) 80%, black)"
        sinal.innerHTML = `<img src="./img/sinal.png" alt="">`;
    }
  
}

function verificar_posts() {

    nome_usuario = sessionStorage.nome_usuario_meuapp;
    sobrenome_usuario = sessionStorage.sobrenome_usuario_meuapp;
    numeroCartao = sessionStorage.numeroCartao_meuapp;
    digitoCartao = sessionStorage.digitoCartao_meuapp;
    corCartao = sessionStorage.cor_cartao_meuapp;
    clube = sessionStorage.clube_meuapp;
    var beneficios = document.getElementById("beneficios");
    var beneficios2 = document.getElementById("beneficios2");
    var beneficios3 = document.getElementById("beneficios3");

    // if (clube == "São Paulo FC"){
    //     plano.innerHTML = "Plano Tricolor"
    // }

    // if (clube == "Palmeiras"){
    //     plano.innerHTML = "Plano Verdão"
    // }

    if(corCartao == "laranja" || corCartao == "nenhum"){
        beneficios.style = "background: linear-gradient(to bottom, #ff7400 80%, #cc5c00);"
        beneficios2.style = "background: linear-gradient(to bottom, #ff7400 80%, #cc5c00);"
        beneficios3.style = "background: linear-gradient(to bottom, #ff7400 80%, #cc5c00);"
    }

    if (corCartao == "verde"){
        beneficios.style = "background: linear-gradient(to bottom, rgb(0, 209, 0) 80%, rgb(1, 167, 1))"
        beneficios2.style = "background: linear-gradient(to bottom, rgb(0, 209, 0) 80%, rgb(1, 167, 1))"
        beneficios3.style = "background: linear-gradient(to bottom, rgb(0, 209, 0) 80%, rgb(1, 167, 1))"
    }

    if (corCartao == "vermelho"){
        beneficios.style = "background: linear-gradient(to bottom, rgb(231, 0, 0) 80%, rgb(187, 0, 0)"
        beneficios2.style = "background: linear-gradient(to bottom, rgb(231, 0, 0) 80%, rgb(187, 0, 0)"
        beneficios3.style = "background: linear-gradient(to bottom, rgb(231, 0, 0) 80%, rgb(187, 0, 0)"
    }

    if (corCartao == "preto"){
        beneficios.style = "background: linear-gradient(to bottom, rgb(22, 22, 22) 80%, black)"
        beneficios2.style = "background: linear-gradient(to bottom, rgb(22, 22, 22) 80%, black)"
        beneficios3.style = "background: linear-gradient(to bottom, rgb(22, 22, 22) 80%, black)"
    }
  
}

function verificar_card_nav() {

    nome_usuario = sessionStorage.nome_usuario_meuapp;
    sobrenome_usuario = sessionStorage.sobrenome_usuario_meuapp;
    numeroCartao = sessionStorage.numeroCartao_meuapp;
    digitoCartao = sessionStorage.digitoCartao_meuapp;
    corCartao = sessionStorage.cor_cartao_meuapp;
    clube = sessionStorage.clube_meuapp;
    // nav_dash = document.getElementById("nav_dash");
    

    nome2.innerHTML = `${nome_usuario}`;

    if (clube == "São Paulo FC"){
    
        logo2.innerHTML = `<img src="https://logodownload.org/wp-content/uploads/2016/09/sao-paulo-logo-escudo-1.png" alt="">`
    }

    if (clube == "Palmeiras"){
        logo2.innerHTML = `<img src="./img/palmares.png" alt="">`
    }

    if(corCartao == "laranja" || corCartao == "nenhum"){
        nav_dash.style = "background: linear-gradient(to right, #ff7400 80%, #cc5c00);"
    }

    if (corCartao == "verde"){
        nav_dash.style = "background: linear-gradient(to right, rgb(0, 209, 0) 80%, rgb(1, 167, 1))"
    }

    if (corCartao == "vermelho"){
        nav_dash.style = "background: linear-gradient(to right, rgb(231, 0, 0) 80%, rgb(187, 0, 0)"
    }

    if (corCartao == "preto"){
        nav_dash.style = "background: linear-gradient(to right, rgb(22, 22, 22) 80%, black); color:white"
        a_beneficio.style = "color:white"
        a_cartao.style = "color:white"
        a_estatistica.style = "color:white"
    }
  
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
}

function verificar_graphs(){
    clube = sessionStorage.clube_meuapp;
    var spg = document.getElementById("grafics_sp")
    var pg = document.getElementById("grafics_p")
    
    if (clube == "São Paulo FC"){
        pg.style.display = "none"
    }

    else if (clube == "Palmeiras"){
        spg.style.display = "none"
    }
}