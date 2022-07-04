
export {nome, sobrenome, idade, soma}

const nome = 'luiz';
const sobrenome = 'miranda';
const idade = 30;


export default function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}