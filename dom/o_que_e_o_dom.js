// window e document
// são os principais objetos do DOM
// a manipulação é feita através de seus métodos e propriedades

// window.alert("Olá Mundo!")

//retorne a url da pág atual
const hrefPagina = window.location.href
console.log(hrefPagina);

//selecione o primeiro elemento da pag que tem a classe ativo
const elementoAtivo = document.querySelector(".ativo")

//retorne a linguagem do navigador
const linguagem = window.navigator.language
console.log(linguagem);

//retorne a largura da janela
const windowWidth = window.innerWidth
console.log(windowWidth);
