const data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'segunda';
        break;
    case 2:
        diaSemanaTexto = 'terça';
        break;
    case 3:
        diaSemanaTexto = 'quarta';
        break;
    case 4:
        diaSemanaTexto = 'quinta';
        break;
    case 5:
        diaSemanaTexto = 'sexta';
        break;
    case 6:
        diaSemanaTexto = 'sabado';
        break;
    default:
        diaSemanaTexto = '';
        break
}

console.log(diaSemana, diaSemanaTexto);

// const diaDaSemanaSTR = () => {
//     let dia = data.getDay();
//     const semana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
//     return semana[dia]
// }
// 
// console.log(diaDaSemanaSTR());

