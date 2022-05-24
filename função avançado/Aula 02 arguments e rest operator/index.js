// A function possui uma variavel arguments que sustenta todos os argumentos enviados. Ex:

function soma() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(arguments)
    console.log(total);
}

soma(10, 20, 30, 40, 50, 'oi')

// Argumentos padrões

function soma3Numeros( a= 1, b = 2, c=4) {
    console.log(a + b + c);
}

soma3Numeros();
soma3Numeros(10);
soma3Numeros(10, 20, 30);
soma3Numeros(1, undefined, 30);

// Desistruturação de Array e obj

function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcao({nome: 'Leonardo', sobrenome:'Paiva', idade: 21})

// função com rest operator

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;

    }

    console.log(acumulador);
}

conta('-', 0, 10, 20, 30, 40, 50);
conta('+', 0, 10, 20, 30, 40, 50);
conta('*', 1, 10, 20, 30, 40, 50);

// rest operator funciona como args em todas inclusive na arrow function

const a123 = (...args) => {
    console.log(args);
}

a123(1,2,3);