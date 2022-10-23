//array: serve para guardarmos valores dentro de uma variável
// para acessar o array: chamar a variável com chaves e o indice dentro [0]

var videoGame = ["Switch", "PS4", "XBox"]
videoGame.pop() //remove o último item
videoGame.push("3DS") //adiciona no final do array
videoGame.length //monstra a quandidade de itens do array

//loop: serve para fazer algo repetidamente com um comando unico
//  for (var numero = 0; numero <= 10; numero++){
//                                    //numero++ é igual a numero = numero + 1 
//     console.log(numero)
//  }

for (var item = 0; item < 3; item++) {
   // console.log(item);
   console.log(videoGame[item]);
}

console.log(videoGame[0]); //Switch
console.log(videoGame[1]); //PS4
console.log(videoGame[2]); //XBox
console.log(videoGame[3]); //undfined

console.log(videoGame[item]); //undefined

for (var item = 0; item < videoGame.length; item++) {
   console.log(videoGame[item]);
   if (videoGame[item] === "PS4") {
      break
   }
}

//forEach: método que executa uma função para cada item do array

videoGame.forEach(function(item){
   console.log(item); //mostra os itens do array
})

var frutas = ["banana", "uva", "pera", "melão", "abacaxi"]

// frutas.forEach(function(fruta, index){ 
//    frutas.pop()//vai eliminar os ultimos itens do array até sobrar os itens 0 e 1
//    console.log(fruta, index, frutas); //mostra as frutas do array com o índice
// })

for(var fruta = 0; fruta < frutas.length; fruta++){
   
   if(frutas[fruta] === "melão"){
      break
   }
   console.log(frutas[fruta]);
}

var ultimaFruta = frutas[frutas.length -1]
console.log(ultimaFruta);




