let listaDeAlunos = ['João', 'Maria', 'Pedro']

let numeroDeAlunos = listaDeAlunos.length

listaDeAlunos[numeroDeAlunos] = 'luiza'

listaDeAlunos.push('Vraunaticos') // adiciona no final

listaDeAlunos.unshift('patolicos') // adiciona no primeiro

listaDeAlunos[10] = 'yodistas'

listaDeAlunos.push('bolinha')

console.log(listaDeAlunos)

let alunosRemovidos = [listaDeAlunos.pop(), listaDeAlunos.shift()]; // o pop remove do final e o shift remove do inivio 

console.log(alunosRemovidos)

console.log(listaDeAlunos)

delete listaDeAlunos[1] // deleta mas deixa o espaço vazio

console.log(listaDeAlunos)

console.log(typeof listaDeAlunos)

console.log(listaDeAlunos instanceof Array)

console.log(typeof listaDeAlunos[1])


console.log(listaDeAlunos.slice(0, 4))