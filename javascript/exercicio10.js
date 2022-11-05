//Crie uma classe para representar Pessoas
//Cada pessoa deve ter os atributos nome, peso e altura;
//As pessoas devem ter a capacidade de dizer o valor do seu IMC (peso / (altura * altura);
//Instancie uma pessoa chamada José com 70kg e 1,75
//e peça ao José para dizer o valor do seu IMC.

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / Math.pow(this.altura, 2)
    }

    classificarImc(){
        const imc = this.calcularImc();

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
}

const jose = new Pessoa("José", 150, 1.70);
console.log(jose.classificarImc());
const adriana = new Pessoa("Adriana", 45, 1.60);
console.log(adriana.classificarImc());