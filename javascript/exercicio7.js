function escreverMeuNome(nome){
    return `Meu nome é ${nome}`;
}

function verificarMaiorIdade(idade){
    if(idade >= 18){
        console.log(escreverMeuNome("Adriana") + " e sou maior de idade");
    }else{
        console.log(escreverMeuNome("Adriana") + " e sou menor de idade");
    }
}
verificarMaiorIdade(43);