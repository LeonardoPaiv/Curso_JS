const numeros = [5, 20, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// filter, utiliza uma função de callback, passando semelhante a um For com os atributos (valor, indice, array)
// para retornar um valor utiliza valores booleanos true or false

const numerosMaiores10 = numeros.filter(valor => valor > 10);
console.log(numerosMaiores10);


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const pessoascom5letras = pessoas.filter(valor => valor.nome.length >= 5);

console.log(pessoascom5letras);

const pessoasComMais50Anos = pessoas.filter(valor => valor.idade > 50);
console.log(pessoasComMais50Anos);

const pessoascomfinalA = pessoas.filter(valor => valor.nome.toLocaleLowerCase().endsWith('a'));
console.log(pessoascomfinalA);