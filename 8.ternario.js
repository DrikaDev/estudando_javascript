//Operadores de atribuição
//podem funcionar de formas abreviadas:

var x = 5
var y = 10

x += y // x = 15
x -= y // x = -5
x *= y // x = 50
x /= y // x = 0.5
x %= y // x = 0
x **= y // x = 9765625

//==================================

var num = 20
var num2 = 30
num += num2 // ou num = num + 10
console.log(num);

//==================================

//Operador ternário
//utilizamos quando precisamos atribuir um valor para uma variável,
//dependendo de sua condição

var idade = 18
// var possuiDiabete = true
var podeBeber = (idade >= 18) ? "Pode beber!" : "Não pode beber"
console.log(podeBeber);

var possuiFaculdade = false
if (possuiFaculdade)
    console.log("possui faculdade");
else
    console.log("não possui faculdade");

//==================================

var possuiCarro = true
var possuiCasa = false
var darCredito

darCredito = (possuiCarro && possuiCasa)
console.log(darCredito);
darCredito = (possuiCarro || possuiCasa) ? "Crédito aprovado" : "Crédito Negado"
console.log(darCredito);

