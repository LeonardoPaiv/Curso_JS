const numero = Number(prompt('Digite seu numero para prosseguir'));
const numeroEscolhido = document.getElementById('numeroEscolhido');
const numeroTexto = document.getElementById('texto')

numeroEscolhido.innerHTML = numero;
numeroTexto.innerHTML = `<p>Seu numero mais 10 é igual a ${numero + 10}<br>
A raiz quadrada do seu numero é: ${numero ** 0.5}<br>
seu numero ${numero} é inteiro ? ${Number.isInteger(numero)}<br>
Seu numero é um NaN? ${Number.isNaN(numero)}<br>
Arredondando seu numero para baixo é ${Math.floor(numero)}<br>
Arredondando seu numero para cima é ${Math.ceil(numero)}<br>
Com duas casas decimais seu numero é ${numero.toFixed(2)}</p>`;

