/*
For clássico - geralmente com interáveis (array ou strings)
for in - retorna o indice ou chave (string, array ou objetos)
for of - retorna o valor em si (interáveis, arrays ou strings)

//   variavel   condição  incremento
/*
for (let i = 10; i <= 20;  i +=2) {
    console.log(`Linha ${i}`)
}

for (let b = 0; b <=10; b++) {
    const par = b % 2 === 0 ? 'par' : 'impar';
    console.log(b, par);
}
*/

const frutas = ['frutas', 'pera', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}`, frutas[i]);
}

// for in

for (let indice in frutas) {
    console.log(frutas[indice])
}

console.log();
const pessoa = {
    nome: 'Leo',
    sobrenome: 'Paiva',
    idade: 21
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// for of pega o valor ao invés de o indice

const nome = 'Leonardo de Paiva Rêgo'

for (let valor of nome) {
    console.log(valor);
}

// forEach(function(valor, indice, array) {})

const nomes = ['leonardo', 'louis', 'luna']
nomes.forEach(function(vallor, indi, arrayy) {
    console.log(vallor, indi, arrayy);
});

