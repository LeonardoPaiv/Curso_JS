function timeRd(min=0, max=3) {
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

async function executar() {
    try {
        const fase1 = await falar('fase 01', timeRd());
        console.log(fase1);

        const fase2 = await falar('fase 02', timeRd());
        console.log(fase2)

        const fase3 = await falar('fase 03', timeRd());
        console.log(fase3)

        const fase4 = await falar(1234, timeRd());
        console.log(fase4);

        console.log('pronto')
    } catch(e) {
        console.log(e)
    }
}

executar();