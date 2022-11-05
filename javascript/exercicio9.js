//Crie uma classe para representar carros.
//Os carros possuem: marca, cor, gasto médio de combustível por km rodado

//Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor 
//gasto em reais para realizar o percurso.

class Carro{
    marca;
    cor;
    gastoMedioCombustivelPorKm;

    constructor(marca, cor, gastoMedioCombustivelPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm;
    }

    calcularGastoPercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioCombustivelPorKm * precoCombustivel
    }
}

//1/12 = 1 litro faz 12 kilometros
const ka = new Carro ("Ford", "Prata", 1/12 );
console.log(ka.calcularGastoPercurso(70, 5));

//1/12 = 1 litro faz 10 kilometros
const palio = new Carro ("Fiat", "Preto", 1/10);
console.log(palio.calcularGastoPercurso(70, 5));
