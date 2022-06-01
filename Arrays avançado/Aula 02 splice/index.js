// splice remove um elemento e retorna uma array

const names = ['maria', 'gabriela', 'julia', 'laura', 'isabela'];

// names.splice(índice, delete, elem1, elem2,...)

const removidos = names.splice(-3, 2)
console.log(names, removidos);

// adicionando valores com splice 

names.splice(3, 0, 'murilo', 'joão')
console.log(names);