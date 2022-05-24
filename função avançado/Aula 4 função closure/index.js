// Quando criamos uma função vazia que retorna uma função ela cria funções noveas, faz o retorno

function criaMultip(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const vezes100 = criaMultip(100)

console.log(vezes100(5));

// Clousure é a capacidade de retornar ao seu escopo léxico 