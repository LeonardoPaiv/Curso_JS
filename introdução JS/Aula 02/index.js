const primeiroNome = 'Leonardo';
const sobrenome = 'Paiva';
const idade = 21;
const peso = 55;
const altura = 1.7;
let imc;
let anoNascimento;
imc = peso / (altura**2);
anoNascimento = 2021 - idade;
let ficha = [primeiroNome, sobrenome, idade, peso, altura, imc, anoNascimento]
console.log(ficha)
console.log(`Meu nome é ${primeiroNome} ${sobrenome}, tenho ${idade} de idade, peso ${peso} kg e tenho ${altura} de altura, meu imc é ${imc} e eu nasci em ${anoNascimento}`)

