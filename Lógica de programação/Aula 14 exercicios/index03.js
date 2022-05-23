const famoso = (numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log('FizzBuzz');
    } else if (numero % 5 === 0) {
        console.log('Buzz');
    } else if (numero % 3 === 0) {
        console.log('Fizz');
    } else if (numero % 3 !== 0 || numero % 5 !== 0) {
        console.log(numero);
    } else if (typeof (numero) === Number) {
        console.log(numero);
    }
}

for (let i = 0; i <= 100; i++) {
    famoso(i)
}