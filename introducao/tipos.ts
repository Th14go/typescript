//boolean
let estaPago = true;
//number
let idade = 31;
//number,
let valor = 29.99;
//string
let empresa = 'Unopar Arapongas';
let nome = 'Thiago';
// array numbers
 let notas = [9,8,7,6];
//tuple
 let alunos = ['Thiago', 10, 'POO'];
// concatenação tradicional
console.log('Meu nome é: ' + nome , 'e tenho ' + idade + ' anos');

console.log(alunos);
// imprime indice array alunos posição 2
console.log(alunos[2]);

//Enum
let cor;
(function (cor: any){
 cor[cor["Azul"] = 50] = "Azul";
 cor[cor["Vermelho"]= 60] = "Vermelho";
 cor[cor["Verde"] = 70] = "Verde";

})
(cor || (cor = {}));

let corFundo = cor.Verde;
console.log(corFundo);






