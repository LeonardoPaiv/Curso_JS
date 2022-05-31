// funçoes geradores levam asterisco na frente 

function* geradora1() {
    // o  yield retorna um valor sem terminar a função, 
    // alem disso ele retorna pausadamente.
    // para acessar os proximos valores, você deve chamar novamente a F.geradora
    yield "primeiro valor"
    yield "segundo valor"
    yield "terceiro valor"
}

/*
para acessar o objeto m, vocÊ deve utilizar o next()
const g1 = geradora1();
console.log(g1.next().value);
*/
const g1 = geradora1();
for (let valores of g1) {
    console.log(valores);
}