//Crie um programa que seja capaz de percorrer uma lista de números e imprima
//cada número par encontrado;

const listaDeNumeros = [2, 5, 8, 12, 17, 21, 25, 30, 100, 151, 258, 299];

for (let i = 0; i < listaDeNumeros.length; i++) {

    const numero = listaDeNumeros[i]
    
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par`);
    }
}

const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);