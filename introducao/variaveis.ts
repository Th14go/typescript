function iniciaTime(iniciaJogo){
let nome = 'Messi';
let cidade = 'São Paulo';

if (iniciaJogo) {
    cidade = 'Arapongas';
}
console.log(nome + ' vai jogar em '  + cidade);
}
iniciaTime(true);