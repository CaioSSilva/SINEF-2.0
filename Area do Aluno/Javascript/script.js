var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;

document.querySelector(".data").innerHTML = dataAtual;


let acadOpt = document.querySelector('.academico-options');
let didOpt = document.querySelector('.didatico-options');
let eventOpt = document.querySelector('.eventos-options');
let finanOpt = document.querySelector('.financeiro-options');

function menuAcad(){
    if(acadOpt.style.display == "none"){
        acadOpt.style.display = "block"
    }
    else{
        acadOpt.style.display = "none" 
    }
}
function menuDid(){
    if(didOpt.style.display == "none"){
        didOpt.style.display = "block"
    }
    else{
        didOpt.style.display = "none" 
    }
}
function menuEvent(){
    if(eventOpt.style.display == "none"){
        eventOpt.style.display = "block"
    }
    else{
        eventOpt.style.display = "none" 
    }
}
function menuFinan(){
    if(finanOpt.style.display == "none"){
        finanOpt.style.display = "block"
    }
    else{
        finanOpt.style.display = "none" 
    }
}