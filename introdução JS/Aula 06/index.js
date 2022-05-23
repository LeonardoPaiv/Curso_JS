let varA = 'A';
let varB = 'B';
let varC = 'C';

let conjunto = [varA, varB, varC];

[varA, varB, varC] = [varB, varC, varA]
//Esse metodo usa um array para definir valores das variaveis sem perder eles na memoria. 

console.log(varA, varB, varC)

varA = conjunto[1];
varB = conjunto[2];
varC = conjunto[0];

console.log(varA, varB, varC)