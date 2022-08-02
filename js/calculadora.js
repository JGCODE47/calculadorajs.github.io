var valor = 0
var operador = ""
//Variable input resultado
const resultado = document.querySelector("#resultado")
//Variables botones 0-9
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")
const btn9 = document.querySelector("#btn9")
const btn0 = document.querySelector("#btn0")
//Variables operadores
const btnSuma = document.querySelector("#btnSuma")
const btnResta = document.querySelector("#btnResta")
const btnMul = document.querySelector("#btnMul")
const btnBorrar = document.querySelector("#btnBorrar")
const btnDiv = document.querySelector("#btnDiv")
const btnResul = document.querySelector("#btnResul")
//Captura valores de numero
btn1.addEventListener('click', ()=>{
    resultado.value += Number(btn1.getAttribute("valor"))
})
btn2.addEventListener('click', ()=>{
    resultado.value += Number(btn2.getAttribute("valor"))
})
btn3.addEventListener('click', ()=>{
    resultado.value += Number(btn3.getAttribute("valor"))
})
btn4.addEventListener('click', ()=>{
    resultado.value += Number(btn4.getAttribute("valor"))
})
btn5.addEventListener('click', ()=>{
    resultado.value += Number(btn5.getAttribute("valor"))
})
btn6.addEventListener('click', ()=>{
    resultado.value += Number(btn6.getAttribute("valor"))
})
btn7.addEventListener('click', ()=>{
    resultado.value += Number(btn7.getAttribute("valor"))
})
btn8.addEventListener('click', ()=>{
    resultado.value += Number(btn8.getAttribute("valor"))
})
btn9.addEventListener('click', ()=>{
    resultado.value += Number(btn9.getAttribute("valor"))
})
btn0.addEventListener('click', ()=>{
    resultado.value += Number(btn0.getAttribute("valor"))
})
//Funcion borrar
btnBorrar.addEventListener('click', ()=>{
    resultado.value = ""
    valor = 0
    operador = ""
})
// Funcion suma
btnSuma.addEventListener('click', ()=>{
    valor = Number(resultado.value)
    operador = "+"
    resultado.value = ""
})
//Funcion resta
btnResta.addEventListener('click', ()=>{
    valor = Number(resultado.value)
    operador = "-"
    resultado.value = ""
})
//Funcion multiplicacion
btnMul.addEventListener('click',()=>{
    valor = Number(resultado.value)
    operador = "*"
    resultado.value = ""
})
//Funcion division
btnDiv.addEventListener('click', ()=>{
    valor = Number(resultado.value)
    operador = "/"
    resultado.value = ""
})
//Funcion resultado
btnResul.addEventListener('click', ()=>{
    const valor1 = valor
    const valor2 = Number(resultado.value)
    switch (operador) {
        case "+": 
            const suma = valor1 + valor2
            resultado.value = suma
            valor = 0
            operador = ""
        break;
        case "-": 
            const resta = valor1 - valor2
            resultado.value = resta
            valor = 0
            operador = ""
        break;
        case "*": 
            const multiplicacion = valor1 * valor2
            resultado.value = multiplicacion
            valor = 0
            operador = ""
        break;
        case "/": 
            const division = valor1 / valor2
            resultado.value = division
            valor = 0
            operador = ""
        break;
    
    }
})