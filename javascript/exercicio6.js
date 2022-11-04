//continuação do exercício 04

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return `Seu IMC é ${imc.toFixed(0)} e você está abaixo do peso`;
    } else if (imc >= 18.5 && imc <= 25) {
        return `Seu IMC é ${imc.toFixed(0)} e você está com peso normal`;
    } else if (imc >= 25 && imc <= 30) {
        return `Seu IMC é ${imc.toFixed(0)} e você está acima do peso`;
    } else if (imc >= 30 && imc <= 40) {
        return `Seu IMC é ${imc.toFixed(0)} e você está obeso`;
    } else {
        return `Seu IMC é ${imc.toFixed(0)} e você está com obesidade grave!`;
    }
}

//função anônima: 
//quando coloca () ao redor da função, 
//invoca a função fo final com () vazio,
// e tira o nome dela!
// (function main(){
(function (){
    const peso = 57
    const altura = 1.59;
    // const imc = peso / (altura * altura)
    const imc = calcularImc(peso, altura);
    // console.log(imc2.toFixed(0));
    console.log(classificarImc(imc));
})();
//daí não precisa mais invocar a função conforme abaixo:
// main();