// Função construtora -> objetos
// Função fabrica -> objetos
// construtora -> Pessoa (new) funções construtoras começam com letra maiuscula e para chama-las precisamos utilisar o new como no examplo
// as funções construtoras criam um objeto e já retornam o objeto, sem a necessidade de utilizar return 

function Pessoa(nome, sobrenome) {
    // Atributos ou metodos privados
    const privada = 1234

    // Atributos ou metodos privados
    this.nome = nome;
    this.sobrenome = sobrenome;

}

const p1 = new Pessoa('Luiz', 'Oliveira');

console.log(p1)