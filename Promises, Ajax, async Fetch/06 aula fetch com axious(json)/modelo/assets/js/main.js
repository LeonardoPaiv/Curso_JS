//fetch('pessoas.json')
//    .then(resposta => resposta.json())
//    .then(json => carregaElementosPagina(json));

axios('pessoas.json')
    .then(resposta => carregaElementosPagina(resposta.data))

function carregaElementosPagina(json) {
    const table = document.createElement('table');

    for(let pessoas of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoas.nome;
        tr.appendChild(td);

        //let td2 = document.createElement('td');
        //td2.innerHTML = pessoas.idade;
        //tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoas.salario;
        tr.appendChild(td3);

        table.appendChild(tr);        
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}