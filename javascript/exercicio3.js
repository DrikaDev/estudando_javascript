// Faça um algoritmo que dado as 3 notas tiradas por um aluno,
// calcule e imprima sua média e a sua classificação conforme a tabela abaixo:

// - média menor que 5, reprovado;
// - média entre 5 e 7, recuperação;
// - média acima de 7, passou.

const nota1 = 5;
const nota2 = 5;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3
// console.log(media);

if(media < 5){
    console.log(`Sua média é ${media.toFixed(1)} e você foi reprovado.`);
}else if(media >= 5 && media <=7){
    console.log(`Sua média é ${media.toFixed(1)} e você está de recuperação.`);
}else{
    console.log(`Parabéns, sua média é ${media.toFixed(1)} e você passou!`);
}