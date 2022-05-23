/*const pessoa01 = {
    nome: 'luiz', sobrenome: 'Miranda', idade: 20
} // isso aqui em JS é um objeto

console.log(pessoa01.nome)
*/

function criaPessoa(nome, sobrenome, idade) {
    return {
      nome,          //nome: nome,
      sobrenome,          //sobrenome: sobrenome,
      idade          //idade: idade
    }
}

const pessoa01 = criaPessoa('Leonardo', 'Paiva', 21)

const apresentação = {
    fala() {
        console.log(`Olá, eu sou ${pessoa01.nome} ${pessoa01.sobrenome} e tenho ${pessoa01.idade} anos`)
    },

    incrementaIdade () {
        pessoa01.idade++;
    }
}

apresentação.fala();
apresentação.incrementaIdade();
apresentação.fala();

