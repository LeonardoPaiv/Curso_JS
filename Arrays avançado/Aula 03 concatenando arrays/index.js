const a1 = [1,2,3]
const a2 = [2,4,6]
const a3 = [3,5,7]

const juncao = [...a1, ...a2, ...a3]
console.log(juncao)

const a1Ea2 = a1.concat(a2)
console.log(a1Ea2);