window.onscroll = function(){
    scroll();
    scrollheader();
}

function scroll (){
    var btn_topo = document.getElementById("botao_topo");
    

    if(document.documentElement.scrollTop>90){
        btn_topo.style = "display: block"
        
    }

    else{
        btn_topo.style = "display: none"
       
    }
}

function scrollheader(){
    var head = document.getElementById("header");

    if(document.documentElement.scrollTop>200){
            
        head.style.backgroundColor = "white"
    }
    
    else{
            
        head.style.backgroundColor = ""
    }

}

    
    var checkboxmenu = document.getElementById("checkbox_menu");
document.getElementById("checkbox_menu").onclick = function () {
        
    if (checkboxmenu.checked) {
        menu.style = "display: block"
    } else {
        menu.style = "display: none"
    }
}

function check (){
    
    checkboxmenu.checked = false;
    menu.style = "display: none"
}

var checkboxEntrar = document.getElementById("checkbox_entrar");
document.getElementById("checkbox_entrar").onclick = function () {
        
    if (checkboxEntrar.checked) {
        box_login.style = "display: block"
        site.style = "overflow-y: hidden "
        
    } else {
        box_login.style = "display: none"
    }
}
    
// function cor_time(){
//     time();
//     card_cor();
// }

function time () {

    var escolha_time = select_time.value
    var verde = document.getElementById("cor_verde");
    var vermelho = document.getElementById("cor_vermelho");
    
    var cartao = document.getElementById("card");

    if (escolha_time == "spfc"){
        verde.style = "display: none";
        logo.innerHTML = `<img src="https://logodownload.org/wp-content/uploads/2016/09/sao-paulo-logo-escudo-1.png" alt="">`
        vermelho.style = "display: block";
        cartao.style = "background: linear-gradient(to bottom, #ff7400 80%, #cc5c00);"
    }

    else if (escolha_time == "sep"){
        verde.style = "display: block";
        logo.innerHTML = `<img src="./img/palmares.png" alt="">`
        vermelho.style = "display: none";
        cartao.style = "background: linear-gradient(to bottom, #ff7400 80%, #cc5c00);"
    }
}

function card_cor (){

    var escolha_cor = select_cor.value
    var cartao = document.getElementById("card");


    if(escolha_cor == "lj" || escolha_cor == "nenhum"){
        cartao.style = "background: linear-gradient(to bottom, #ff7400 80%, #cc5c00);"
        nome.style.color = "black";
        numero.style.color = "black";
        sinal.innerHTML = `<img src="./img/sinal preto.png" alt="">`;
    }

    else if (escolha_cor == "vd"){
        cartao.style = "background: linear-gradient(to bottom, rgb(0, 209, 0) 80%, rgb(1, 167, 1))"
        nome.style.color = "black";
        numero.style.color = "black";
        sinal.innerHTML = `<img src="./img/sinal preto.png" alt="">`;
    }

    else if (escolha_cor == "vm"){
        cartao.style = "background: linear-gradient(to bottom, rgb(231, 0, 0) 80%, rgb(187, 0, 0)"
        nome.style.color = "black";
        numero.style.color = "black";
        sinal.innerHTML = `<img src="./img/sinal preto.png" alt="">`;
    }

    else if (escolha_cor == "pt"){
        nome.style.color = "white";
        numero.style.color = "white";
        cartao.style = "background: linear-gradient(to bottom, rgb(22, 22, 22) 80%, black)"
        sinal.innerHTML = `<img src="./img/sinal.png" alt="">`;
    }
}

var number_card = "";
var digito_card = "";

function gerar_card(){
    number_card = parseInt(Math.random()*1000000);
    alert(`${number_card}`);
}


