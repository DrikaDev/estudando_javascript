//Objetos, conjunto de variáveis e funções que são chamadas de propriedades e métodos.
//servem para organizar o código em pequenas partes reutilizáveis

var dados = {
    nome: "Adriana",
    idade: 43,
    filho: true,
    dinheiro: null,
}

dadosPessoais.nome
dadosPessoais.filho

//método, é uma propriedade que possui uma funçao no local do seu valor

var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado
    },
    perimetro: function (lado) {
        return this.lados * lado
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

console.assert(quadrado(5))

var nome = "Adriana"
//nomeie 3 propriedades ou métodos de strings:
nome.length
nome.charAt(1)
nome.replace("i", "e")

//Quando aparece a mensagem "is not a function" significa que não é método, é propriedade, então precisa de ()
//Um objeto é uma coleção de propriedades, 
//e uma propriedade é uma associação entre um nome (ou chave) e um valor. 
//Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.

//nomeie 5 propriedades ou métodos de elementos do DOM:


