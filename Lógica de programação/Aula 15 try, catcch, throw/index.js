// erros, como tratar e como criar erros

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros');
    }
    return x + y;
}

try {
    console.log(soma('10', 5));
} catch (error) {
    console.log('x e y precisam ser numeros');
} finally {
    console.log('finally é sempre executado \nIsso é bom para fechar aquivos que dão erro')
}