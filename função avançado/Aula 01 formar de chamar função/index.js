// declaração tradicional
function  falaOi() {
    console.log('oi');
}

falaOi();

//Function Expression, chamando uma função de uma constante

const souUmDado = function() {
    console.log('sou um dado');
}

souUmDado();

//Arrow function

const arrow = () => {
    console.log('função arrow');
}

arrow();

// Metodo dentro de um objeto

const objeto = {
    falar: function() {
        console.log('estou falando');
    },
    // também pode ser chamada assim
    segundomodo() {
        console.log('segunda maneira');
    }
};

objeto.falar();
objeto.segundomodo();
