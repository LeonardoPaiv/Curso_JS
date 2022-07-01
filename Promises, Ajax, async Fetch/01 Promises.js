function timeRd(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function falar(msg, time) {
    //        resolve: chama algo quando a função quando a função executa corretamente
    //        reject: quando acontece um erro no código 
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')

        setTimeout(() => {
            resolve(msg)
        }, time);
    });
}

//          Promises podem ter 3 estados
//          Pending - quando está sendo executada
//          fullfiled - quando foi executada corretamente
//          rejected - quando foi rejeitada

//          then: chama a proxima tarefa quando o resolve é executado
//          catch: faz a tratativa quando o reject é executado

//          Tratativas feitas pelo resolve devem ser uma função
//          As promisses trabalham em paralelo na execução do código
falar('Conectar na BD', timeRd(1,4))
.then(resposta => {
    console.log(resposta);
    return falar('Buscar dados na BD', timeRd(1,3));
})
.then(resposta => {
    console.log(resposta);
    return falar('Tratar dados buscados', timeRd(1,3));
})
.then(resposta => {
    console.log(resposta)
    return falar(12683, timeRd(1,3))
})
.then(() => console.log('Exibir dados'))
.catch(e => console.log('Error:', e));