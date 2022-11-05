const { gets, print} = require("./funcoes_auxiliares")

// print(gets());
// print(gets());
// print(gets());
// print(gets());
// print(gets());

//==============================

// const numerosSorteados = [];

// for (let i = 0; i < 5; i++) {
//     const numeroSorteado = gets();
//     numerosSorteados.push(numeroSorteado);
// }

// let maiorValor = 0;

// for (let index = 0; index < numerosSorteados.length; index++) {
//     const numeroSorteado = numerosSorteados[index];
//     if(numeroSorteado > maiorValor){
//         maiorValor = numeroSorteado;
//     }
// }

// print(maiorValor);

//==============================

// let maiorValorEncontrado = 0;

// for (let index = 0; index < 5; index++) {
//     const numeroSorteado = gets();
//     if(numeroSorteado > maiorValorEncontrado){
//         maiorValorEncontrado = numeroSorteado;
//     }
// }

// print(maiorValorEncontrado);

//==============================

let quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let index = 0; index < quantidadeDeAlunos; index++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);