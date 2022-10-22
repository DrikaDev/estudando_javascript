// ao criar uma função você pode definir os parâmetros: lado
function areaQuadrado (lado){
    return lado * lado   
}
//ao executar uma função você pode passar argumentos: 5
console.log(areaQuadrado(5));

//parametros: peso e altura
function calcularImc (peso, altura){
    const imc = peso / (altura * altura)
    return imc
}
//argumentos: 57 e 1.60
console.log(calcularImc(57, 1.60));

function corFavorita (cor){
    if(cor === "azul"){
        return "Eu gosto do céu"
    }else if(cor === "verde"){
        return "Eu gosto de mato"
    }else{
        return "Eu gosto de mar"
    }
}

console.log(corFavorita())

//esta tem dois parametros: a string click e a função anônima 
//função anônima qd o nome não é definido - escrita como function (){} ou () => {}
// addEventListener ("click", function(){
//     console.log("Clicou");
// })

//primeiro parametro, o evento - depois a função como parâmetro
// call back é uma função que ocorre após algo que acontece

// addEventListener ("click", function(){console.log("Você está clicando!")})

function terceiraIdade(idade){
    if(typeof idade !== "number"){
        return "Informe sua idade"
    }else if(idade >= 60){
        return true
    }else{
        return false
    }
}

console.log(terceiraIdade(43));

//crie uma funçao que retorne seu nome completo:

