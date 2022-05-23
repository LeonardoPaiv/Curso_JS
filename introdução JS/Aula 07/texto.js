//            0123456789...
let string = 'Esse daqui é meu texto';

console.log(string.indexOf('daqui'));
//Esse metodo procura o index da primeira letra do que você tá prcurando 

console.log(string.lastIndexOf('daqui'))
//começa a buscar do final e devolve a posição de index


console.log(string.replace('Esse', 'VRAUU'))

console.log(string.replace(/e/, 'VRAUU'))

console.log(string.replace(/e/g, 'VRAUU'))

console.log(string.slice(10))

console.log(string.slice(-10))

console.log(string.slice(5, 9))

console.log(string.toUpperCase())

console.log(string.toLowerCase())

console.log(string.replace(/ /g, '').length)
