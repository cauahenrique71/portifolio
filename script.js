function dark(){
    var check=document.getElementById("check")

    var nav=document.getElementById("nav")
    var  fundo=document.getElementById("fundo")
    let  black=document.getElementById("main2")
    var sobre=document.getElementById("sobre")
    var contatos =document.getElementById("footer")
    var link = document.querySelectorAll(".testee")
    var juntar=document.getElementById("juntar")
    fundo.classList.add("imagem-preta");
   
    if(check.checked == true){
    fundo.style.backgroundImage="url('f1bd065426066cdc8fc7f18cddab46b2a0713e39r1-500-355_hq.gif')"  
    fundo.style.backgroundRepeat="no-repeat"
    fundo.style.backgroundSize="cover"
    fundo.style.filter="grayscale(0%)"
    juntar.style.filter = "grayscale(0%)";
    black.style.backgroundColor="#A9A9A9"
    black.style.color="black"
    sobre.style.backgroundColor="#F2F2F2"
    sobre.style.color="black"
    contatos.style.color="black"
    contatos.style.backgroundColor="#A9A9A9"
        fundo.style.color="white"
    link.forEach(function(link) {
        link.style.color = "black"; 
    });
    nav.style.color="black"
    }
    else{   
    fundo.style.filter="grayscale(100%)"
        juntar.style.filter = "grayscale(100%)";
    contatos.style.backgroundColor="#1C1C1C"
    sobre.style.color="white"
    black.style.color="white"
    sobre.style.backgroundColor="#313131"
    black.style.backgroundColor="#1C1C1C"
    contatos.style.color="white"
    link.forEach(function(link) {
        link.style.color = "white"; 
    });
    fundo.style.backgroundImage="url('f1bd065426066cdc8fc7f18cddab46b2a0713e39r1-500-355_hq.gif')" 
    fundo.style.color="white"
    nav.style.color="white"
    }

}


function rolarcima(){
    window.scrollTo({
        top: document.getElementById('sobre').offsetTop, // Posição vertical do destino
        behavior: 'smooth' // Rolagem suave
    });
}

function rolarmeio(){
    window.scrollTo({
        top: document.getElementById('main2').offsetTop, // Posição vertical do destino
        behavior: 'smooth' // Rolagem suave
    });
}
function rolarmeio2(){
    window.scrollTo({
        top: document.getElementById('footer').offsetTop, // Posição vertical do destino
        behavior: 'smooth' // Rolagem suave
    }); 
}


var typed= new Typed("#type",{
    strings:[
        "Meu nome e Cauã Henrique",
        "Sou programador",
    ],
    fadeOut: true,
    typerSpeed:100,
    BackSpeed:0,
    loop: true
})