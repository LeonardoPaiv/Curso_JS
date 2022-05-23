function meuIMC() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault()


        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        const imc = peso.value / altura.value ** 2;
        imc.toFixed(2);

        if (imc < 18.5) {
            document.querySelector('.resultado').innerHTML = `Seu IMC é ${imc}, Você está abaixo do peso`
        } else if (imc >= 18.5 && imc < 25) {
            document.querySelector('.resultado').innerHTML = `Seu IMC é ${imc}, Você está no peso normal`
        } else if (imc >= 25 && imc < 30) {
            document.querySelector('.resultado').innerHTML = `Seu IMC é ${imc}, Você está no sobrepeso`
        } else if (imc >= 30 && imc < 35) {
            document.querySelector('.resultado').innerHTML = `Seu IMC é ${imc}, Você está na obesidade grau 1`
        } else if (imc >= 35 && imc < 40) {
            document.querySelector('.resultado').innerHTML = `Seu IMC é ${imc}, Você está na obesidade grau 2`
        } else if (imc >= 40) {
            document.querySelector('.resultado').innerHTML = `Seu IMC é ${imc}, Você está na obesidade grau 3`
        } else {
            document.querySelector('.resultado').innerHTML = 'Insira uma altura ou peso valido'
        } 
    }

    form.addEventListener('submit', recebeEventoForm)
    console.log(altura.value)
};

meuIMC();

