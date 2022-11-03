//verifique se sua idade é maior que a de algum parente:

var minhaIdade = 43
var idadeNicolas = 6

if(minhaIdade > idadeNicolas){
    console.log("Sou mais velha");
}else if(minhaIdade === idadeNicolas){
    console.log("É igual");
}else{
    console.log("Ele é mais velho");
}

//Qual valor é retornado na seguinte expressão:

var expressao = (5 -2) && (5 - " ") && (5 - 2)
console.log(expressao);

//verifique se as seguintes variáveis são True ou False:

var nome = "Adriana"
var idade = 43
var possuiDoutorado = false
var estaTrabalhando
var estaRica = 0

console.log(nome, idade, possuiDoutorado, estaTrabalhando, estaRica);
console.log(!!nome, !!idade, !!possuiDoutorado, !!estaTrabalhando, !!estaRica);

//compare o total de habitantes do Brasil com China (valor em milhoes)
var brasil = 207
var china = 1340

if (brasil > china){
    console.log("Brasil tem mais habitantes");
}else{
    console.log("China tem mais habitantes");
}

//o que vai aparecer no console?
if(("gato" === "gato") && (5 > 2)){
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}

//o que vai aparecer no console?
if(("Gato" === "gato") || (5 > 2)){
    console.log("Gato" && "Cão");
}else{
    console.log("Falso");
}

//condição para ver se tal número é par (true ou false)

const numero = 11;
const ehNumeroPar = (numero % 1) === 0;

// if (numeroPar) {
//     console.log("O número é Par");
// }
// if (!numeroPar) {
//     console.log("O número não é Par");
// }
if (ehNumeroPar === 0){
    console.log("Número é inválido");
}else if (ehNumeroPar) {
    console.log("O número é Par");
}else{
    console.log("O número é Ímpar");
}
