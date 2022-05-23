// const data = new Date();
// 
// 
// const diadasemana = () => {
//     const diasDasemanaSTR = ['Domingo', 'Segunda-feita', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']
//     const dia = data.getDay();
//     const diaDaSemanaTexto = diasDasemanaSTR[dia];
// 
//     const diaDoMes = data.getDate();
// 
//     const numeroMes = data.getMonth();
//     const nomeDoMes = ['janeira', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
//     const mes = nomeDoMes[numeroMes]
// 
//     const ano = data.getFullYear();
//     const hora = data.getHours();
//     const acrescentaZeroHora = hora < 10 ? `0${hora}` : hora;
// 
//     const min = data.getMinutes();
//     const acrescentaZeromin = min < 10 ? `0${min}` : min;
// 
//     return document.querySelector('.horario').innerHTML = `${diaDaSemanaTexto}, ${diaDoMes} de ${mes} de ${ano} <br> Horário de Brasília: ${acrescentaZeroHora}:${acrescentaZeromin}.`
// 
// }
// 
// diadasemana();

const h1 = document.querySelector('.horario');
const data = new Date();
const option = {
    dateStyle: 'full'
}

h1.innerHTML = data.toLocaleDateString('pt-BR', option);

