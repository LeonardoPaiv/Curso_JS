// recursividade é uma função que se chama de volta 
// É importante definir um limite para parar a recursividade

function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-10);