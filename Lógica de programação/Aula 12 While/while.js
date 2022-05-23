// While 

// let i = 0;
// const indices = []
// while (i <=10) { // estrutura do while (condição) { o que executa }
//     indices.push(i)
//     i++; // aumenta o indice para não gerar uma condição infinita
// }
// 
// console.log(indices);

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand= random(min, max);
    console.log(rand)
}