//continuação do exercicio 05

// Código da condição de pagamento:
// 1 - à vista no débito, recebe 10% de desconto;
// 2 - à vista no dinheiro ou pix, recebe 15% de desconto;
// 3 - parcelar em 2x, preço normal da etiqueta, sem juros;
// 4 - parcelar acima de 2x, preço normal da etiqueta, com juros de 10%

function aplicarDesconto (valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros (valor, juros){
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagto = 4;

if (formaDePagto === 1) {
    console.log(`Pagto no débito tem 10% de desconto: R$ ${aplicarDesconto (precoEtiqueta, 10)}`);
} else if (formaDePagto === 2) {
    console.log(`Pagto em dinheiro/pix tem 15% de desconto: R$ ${aplicarDesconto (precoEtiqueta, 15)} `);
} else if (formaDePagto === 3) {
    console.log(`Pagto parcelado em 2x, sem direito a desconto, valor a pagar: R$ ${precoEtiqueta}`);
} else {
    console.log(`Pagto parcelado acima de 2x, com juros de 10%, valor a pagar: R$ ${aplicarJuros (precoEtiqueta, 10)}`);
}