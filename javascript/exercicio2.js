// Faça um programa para calcular o valor de uma viagem:
// Você terá 5 variavel, sendo elas:
// 1. preço do etanol;
// 2. preço da gasolina;
// 3. o tipo de combustivel que está no seu carro;
// 4. gasto médio de combustivel do carro por km por litro;
// 5. distância em km da viagem;
// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoDeCombustivel = "Gasolina"
const kmPorLitro = 10;
const distanciaEmKmDaViagem = 100;

const litrosConsumidos = distanciaEmKmDaViagem / kmPorLitro;

if(tipoDeCombustivel === "Etanol"){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}