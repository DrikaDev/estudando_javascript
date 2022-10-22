//Variável serve para evitar repetição
//Conceito DRY - Don´t repeat yourself

//Declarar uma variável com seu nome:
var nome = "Adriana"
console.log(typeof nome);
console.log(nome);

//Declarar uma variável com sua idade:
var idade = 43
console.log(typeof idade);
console.log(idade);

console.log(nome, idade);

//Declarar uma variável com sua comida favorita sem valor:
//variavel sem valor - undefined:
var comidaFavorita;
console.log(comidaFavorita);

//Sua comida favorita com valor:
comidaFavorita = "pizza"
console.log(comidaFavorita);

//Declarar 5 variáveis com vírgula - sem valor:
var endereço, 
    rua, 
    bairro, 
    cidade, 
    estado;
console.log(endereço, rua, bairro, cidade, estado);

//Concatenação
var nome = "Adriana"
var sobrenome ="Gutierrez"
var nomeCompleto = `${nome} ${sobrenome}`
console.log(nomeCompleto);


// var total = 10 + 5 * 2 / 2 + 20
// console.log(total);

// var expressao1 = "teste" * 2;
// var expressao2 = "teste" + 2;
// console.log(expressao1, expressao2);

// var soma = +"200" + 50
// console.log(soma);

// var x = 5
// console.log(++x);

// var numero = "59" / 2;
// var unidade = "kg";
// var peso = numero + unidade;
// console.log(peso); 

// var possuiGraduacao = false;
// var possuiDoutorado = true;

// if(possuiGraduacao){
//     console.log("Possui Graduação");
// }else{
//     console.log("Possui Doutorado");
// }

// var nome =""
// if(nome){
//     console.log(nome);
// }else{
//     console.log("Nome não existe");
// }

// if(!possuiGraduacao){
//     console.log("Não possui graduação");
// }

// var x = "10";
// console.log(x === 10);
// console.log(x !== 10);

// if((5-5) && (5+5)){
//     console.log("Verdadeiro");
// }else{
//     console.log("Falso");
// }

// if((5-10) && (5+5)){
//     console.log("Verdadeiro");
// }else{
//     console.log("Falso");
// }