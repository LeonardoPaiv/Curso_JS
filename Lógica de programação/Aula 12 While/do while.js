function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = 10;

console.log(rand, 'O primeiro valor é 10, mas o Do while vai alterar esse valor antes de checar a condição \n'+ '#####');

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);


