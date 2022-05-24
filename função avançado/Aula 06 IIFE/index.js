// IIFE -> Immediately invoked function expression

// Essas funções servem para criar funções que não tocam o escopo global

// elas podem receber parametros também, basta colocar no parenteses que as chamam
(function () {
    const nome = 'leonardo'
    const qualquerCoisa = 'dhaskjdhg'
    console.log(nome, qualquerCoisa)
})(/* parametros */);

const nome = 'possui o mesmo nome de variavel mas está no escopo global'
const qualquerCoisa = 'é a mesma coisa da de cima'

console.log(nome, '\n' ,qualquerCoisa)