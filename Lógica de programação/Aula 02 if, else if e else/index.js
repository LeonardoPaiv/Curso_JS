/*

Operadores condicionais 

IF, ELSE IF, ELSE

a condição da estrutura if em JS fica em parenteses:

if (hora) {
    console.log('bom dia');
}

*/

let hora = 17


if (hora >= 0 && hora <= 11) {
    console.log(`Bom dia, são ${hora} horas`)
} else if(hora >= 12 && hora <= 17) {
    console.log(`Boa tarde, são ${hora} horas`)
} else if(hora >= 18 && hora < 24) {
    console.log(`Boa noite, são ${hora} horas`)
} else {
    console.log('Insira uma hora correta')
}