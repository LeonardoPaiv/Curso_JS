// array

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

const [, [, , seis]] = numeros;
console.log(seis);

const [abc, ...rest] = numeros;
console.log(rest);

console.log()
// objetos

const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade:30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
const {nome: n, endereco: {numero}, ...resto} = pessoa;
console.log(n, '\n' +numero, '\n' + resto);

