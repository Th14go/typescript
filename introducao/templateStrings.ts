const valores = [10,23,19];

const maiorVinte = valores
.filter(preco => preco > 20)
.map(preco => `R$ ${preco},00`);
console.log(maiorVinte);