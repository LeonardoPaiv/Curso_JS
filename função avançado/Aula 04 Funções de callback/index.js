// Utilizamos as funções de callback para garantir a ordem de execução no site.

function f1(callback) {
    console.log('função 01');
    if (callback) callback();
}

function f2(callback) {
    console.log('função 02');
    if (callback) callback();
}

function f3(callback) {
    console.log('função 03');
    if (callback) callback();
}

f1(f1callback);

function f1callback() {
    f2(f2callback);
}

function f2callback() {
    f3(f3callback);
}

function f3callback() {
    console.log('olá mundo');
}

