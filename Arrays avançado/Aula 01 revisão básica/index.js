// spred operator

const nomes = ['ed', 'luna', 'maria'];
const novo = [...nomes];

novo.pop();
console.log(nomes);
console.log(novo);

nomes.push('maria');

// slice define uma navegação em um arry

const segundo = nomes.slice(0, -2);
console.log(segundo);

// split separa uma string por caracteres

const nome = 'Leonardo de Paiva Rêgo'
const terceiro = nome.split(' ');
console.log(terceiro)

// join uni os valores em uma string

const quarto = terceiro.join(' ');
console.log(quarto);