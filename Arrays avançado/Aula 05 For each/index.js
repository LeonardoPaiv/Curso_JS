// intera sobre os elementos de um array

const a1 = [10, 20, 30];
let total = 0;

a1.forEach((valor, indice, array) => console.log(`valor: ${valor}, indice: ${indice} array: ${array}`));


a1.forEach(valor => {
    total += valor
    console.log(total)
});