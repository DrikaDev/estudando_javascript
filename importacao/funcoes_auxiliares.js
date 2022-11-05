//Uma sala contem 5 alunos
//para cada aluno foi sorteado um número de 01 a 100

//Faça um programa que receba os números sorteados para os alunos
//e mostre o maior número sorteado.

//Dados de entrada: 5, 50 , 10, 98, 23
//Saída: 98 é o maior numero sorteado

//Primeiro criar um array com os numeros sorteados: 5, 50 , 10, 98, 23

// const listaNumerosSorteados = [5, 50 , 10, 98, 23];
let listaNumerosSorteados = [5, 50 , 10, 23, 1, 33, 45, 7, 98, 100];
let i = 0;

function gets(){
    const valor = listaNumerosSorteados[i];
    i++; //ou i = i + 1;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print}
