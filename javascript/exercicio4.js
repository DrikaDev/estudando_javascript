// Elabore um algoritmo que dado o peso e a altura de uma pessoa
// mostre sua condição de acordo com a tabela abaixo:

// Formula do IMC:
// IMC = peso / (altura * altura)

// - abaixo de 18.5 - está abaixo do peso;
// - entre 18.5 e 25 - está com peso normal;
// - entre 25 e 30 - está acima do peso;
// - entre 30 e 40 - está obeso;
// - acima de 40 - obesidade grave;

const peso = 57
const altura = 1.59;
const imc = peso / (altura * altura)
const imc2 = peso / Math.pow(altura, 2)
// console.log(imc2.toFixed(0));
if(imc < 18.5){
    console.log(`Seu IMC é ${imc2.toFixed(0)} e você está abaixo do peso`);
}else if(imc >= 18.5 && imc <= 25){
    console.log(`Seu IMC é ${imc2.toFixed(0)} e você está com peso normal`);
}else if(imc >= 25 && imc <= 30){
    console.log(`Seu IMC é ${imc2.toFixed(0)} e você está acima do peso`);
}else if(imc >= 30 && imc <= 40){
    console.log(`Seu IMC é ${imc2.toFixed(0)} e você está obeso`);
}else{
    console.log(`Seu IMC é ${imc2.toFixed(0)} e você está com obesidade grave!`);
}