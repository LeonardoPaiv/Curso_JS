const falaNome = (nome, sobrenome) => {
    return `${nome} ${sobrenome}`
};

const pessoa = {
    nome: 'leonardo',
    sobrenome: 'Paiva'
};

const idade = 22;

console.log(module);

module.exports.falaNome = falaNome;

exports.pessoa = pessoa;

this.idade = idade;

// o objeto module do node contem uma chave de exports, a qual aceita esses 3 modelos para criar exports.