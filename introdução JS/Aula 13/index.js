/*function myfunction(nome) {
    let abc = 'sadjkl'
    nome = `bom dia ${nome}`
    console.log(nome)
    return `bom dia ${nome}`
}

let listaDeAlunos = ['João', 'Maria', 'Pedro']


myfunction(listaDeAlunos);

const primeiraSaudação = myfunction('vraunatico')

console.log(primeiraSaudação)
*/

function tratamentoDeNumeros(x, y) {
    let soma = x + y 
    return `sua soma deu ${soma}`
}

console.log(tratamentoDeNumeros(10, 15));

/*
const raiz = function(numero) {
    return numero ** 0.5;
};
*/

const raiz = numero => numero ** 0.5;  // É a mesma coisa da função de cima. arrow function

const delta = (a, b, c) => b ** 2 - (4 * a * c)

console.log(delta(-2, 10, 5))

console.log(raiz(9));