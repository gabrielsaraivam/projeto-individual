window.onscroll = function(){
    scroll();
}

function scroll (){
    var btn_topo = document.getElementById("botao_topo");
    

    if(document.documentElement.scrollTop>90){
        btn_topo.style = "display: block"
        
    }

    else{
        btn_topo.style = "display: none"
       
    }
    scrollheader();
}

function scrollheader(){
    var head = document.getElementById("header");

    if(document.documentElement.scrollTop>200){
            
        head.style = "box-shadow: 0 8px 8px -10px rgb(0 0 0 / 15%); background-color:white"
    }
    
    else{
            
        head.style = ""
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


function gerar_card(){

    var numero_cartao = ""
    var digito_cartao = ""
    
    for(var contador = 0; contador<6; contador++) {
        numero_cartao += parseInt(Math.random()*10)
    }

    for(var contador = 0; contador<3; contador++) {
        digito_cartao += parseInt(Math.random()*10)
    }

    // alert(`${numero_cartao} - ${digito_cartao}`);

    var card = document.getElementById("idCard");

    card.value = numero_cartao;

    var digito = document.getElementById("idDigito");

    digito.value = digito_cartao;

}

function estilo_cartao(){

    var valorFk = 0
    var selectTime = select_time.value;
    var selectCor = select_cor.value;

    if(selectTime == "nenhum" || selectCor == "nenhum"){
        alert("escolha seu time e cor corretamente")
    }

    else{

        if(selectTime == "spfc" && selectCor == "lj" ) {
            valorFk = 1;
        }

        else if(selectTime == "spfc" && selectCor == "pt" ) {
            valorFk = 2;
        }

        else if(selectTime == "spfc" && selectCor == "vm" ) {
            valorFk = 3;
        }

        else if(selectTime == "sep" && selectCor == "lj" ) {
            valorFk = 4;
        }

        else if(selectTime == "sep" && selectCor == "pt" ) {
            valorFk = 5;
        }

        else if(selectTime == "sep" && selectCor == "vd" ) {
            valorFk = 6;
        }

        valor_fkestilo.value = valorFk;

    }

}


// select_time
// select_cor
// valor_fkestilo



    // var str = idNome.value;
    // var capitalized = str[0].toUpperCase() + str.substr(1);
   
    // alert(`${capitalized}`)


