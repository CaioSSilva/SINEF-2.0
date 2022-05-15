//Data Atual
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;

document.querySelector(".data").innerHTML = dataAtual;

//Menu Options
const academicoOptions = document.getElementById("academico-options")
const didaticoOptions = document.getElementById("didatico-options")
const eventosOptions = document.getElementById("eventos-options")
const financeiroOptions = document.getElementById("financeiro-options")
//Botoes Menu
const academicoButton = document.getElementById("academico")
const didaticoButton = document.getElementById("didatico")
const eventosButton = document.getElementById("eventos")
const financeiroButton = document.getElementById("financeiro")
//Academico Hover
academicoButton.addEventListener('mouseover', () =>{
    academicoOptions.style.display = 'block'
})
academicoButton.addEventListener('mouseout', () =>{
    academicoOptions.style.display = 'none'
})
academicoOptions.addEventListener('mouseover', () =>{
    academicoOptions.style.display = 'block'
})
academicoOptions.addEventListener('mouseout', () =>{
    academicoOptions.style.display = 'none'
})
//Didatico Hover
didaticoButton.addEventListener('mouseover', () =>{
    didaticoOptions.style.display = 'block'
    let OptionsHeight = (document.getElementById("academico").clientHeight + 25)
    didaticoOptions.style.marginTop = (OptionsHeight + 'px')
})
didaticoButton.addEventListener('mouseout', () =>{
    didaticoOptions.style.display = 'none'
})
didaticoOptions.addEventListener('mouseover', () =>{
    didaticoOptions.style.display = 'block'
})
didaticoOptions.addEventListener('mouseout', () =>{
    didaticoOptions.style.display = 'none'
})
//Eventos Hover
eventosButton.addEventListener('mouseover', () =>{
    eventosOptions.style.display = 'block'
    let OptionsHeight = (document.getElementById("academico").clientHeight + 25)
    eventosOptions.style.marginTop = (OptionsHeight * 2) + 'px'
})
eventosButton.addEventListener('mouseout', () =>{
    eventosOptions.style.display = 'none'
})
eventosOptions.addEventListener('mouseover', () =>{
    eventosOptions.style.display = 'block'
})
eventosOptions.addEventListener('mouseout', () =>{
    eventosOptions.style.display = 'none'
})
//Finaceiro Hover
financeiroButton.addEventListener('mouseover', () =>{
    financeiroOptions.style.display = 'block'
    let OptionsHeight = (document.getElementById("academico").clientHeight + 25)
    financeiroOptions.style.marginTop = (OptionsHeight * 3) + 'px'
})
financeiroButton.addEventListener('mouseout', () =>{
    financeiroOptions.style.display = 'none'
})
financeiroOptions.addEventListener('mouseover', () =>{
    financeiroOptions.style.display = 'block'
})
financeiroOptions.addEventListener('mouseout', () =>{
    financeiroOptions.style.display = 'none'
})
