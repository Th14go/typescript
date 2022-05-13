const precos = [10,23,19,8,12,35,45,52,80,6];

const valoresReais = precos.map(function(preco){
    // forma concatenado
    // return 'R$' + preco + ',00';
    //forma com template strings
    return `R$ ${preco},00`;
})

const precosReais = precos.map(preco =>
     'R$' + preco + ',00');

const acimaVinte = precos.filter
(preco => preco >= 20).map(preco => 'R$' + preco + ',00');
const menorVinte = precos.filter
(preco => preco <= 20).map(preco => 'R$' + preco + ',00');

console.log(`Preços acima de R$20,00: `, acimaVinte);
console.log(`Preços abaixo de R$20,00: `, menorVinte);