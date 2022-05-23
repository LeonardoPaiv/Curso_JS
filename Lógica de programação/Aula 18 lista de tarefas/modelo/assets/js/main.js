/*
const li = document.createElement('classe que quer criar'); 
*/

const relogio = document.querySelector('.relogio');
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

const funRelogio = (data) => {
    relogio.innerText = `Horário: ${data.toLocaleTimeString()}`
}

setInterval(function (){
    let data = new Date(); 
    funRelogio(data);
}, 1000);

const criaLi = () => {
    const li = document.createElement('li');
    return li;
}

const limpaInput = () => {
    inputTarefa.value = "";
    inputTarefa.focus();
}

const craiBotaoApagar = (li) => {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = "Apagar";
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    }
})

const criaTarefa = (textoInput) => {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    craiBotaoApagar(li);
    salvaTarefas();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})


document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefas();
    }
})

const salvaTarefas = () => {
    const liTarefas = tarefas.querySelectorAll('li')
    const listadeTarefas = [];
    
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listadeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listadeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}


const adicionarTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas');
    const listadeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listadeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionarTarefasSalvas();