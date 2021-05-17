window.onscroll = function(){
    scroll();
}

function scroll (){
    var btn_topo = document.getElementById("botao_topo");
    if(document.documentElement.scrollTop>150){
        btn_topo.style = "display: block"
    }

    else{
        btn_topo.style = "display: none"
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
    } else {
        box_login.style = "display: none"
    }
}
    

