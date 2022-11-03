// a variavel var vaza do do bloco

// let usar no for loop
// a let mantém o escopo no bloco
// impede a redeclaração
// mas permite a modificação do valor da variável

// o const mantém o escopo no bloco
// impede a redeclaração da variável
// e impede a modificação do valor dela


//{ as chaves 
//criam um bloco
//não confundir
//} com criação de objetos

{
    var cor = "preto"
    const marca = "fiat"
    let portas = 4

    console.log(cor, marca, portas);
    //os valores são lidos dentro do bloco
}

const dois = 2

function somarDois(x){
    return x + dois
}
console.log(somarDois(4));

function dividirDois(x){
    return x / dois
}
console.log(dividirDois(8));