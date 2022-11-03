// Faça um programa que calcule o valor de uma viagem.
// Você terá 3 variáveis.
// Sendo elas:
// 1. preço do combustivel;
// 2. gasto médio de combustivel do carro por km;
// 3. distância em km da viagem;

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));