const numeros = [5, 20, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// a função map altera os valores de um array e retorna em um novo.

const numerosX2 = numeros.map(valor => valor * 2);
console.log(numerosX2);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const nomes = pessoas.map(valor => valor.nome);
console.log(nomes);

const idades = pessoas.map(objt => ({idade: objt.idade}));
console.log(idades);

const id = pessoas.map((obj, i) => {
    const newObj = {...obj};
    newObj.ID = i + 1
    return newObj
});

console.log(pessoas);
console.log(id);