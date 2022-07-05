const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

//const pessoas = [
//    {nome: 'Leo'},
//    {nome: 'Pedro'},
//    {nome: 'João'},
//    {nome: 'Maria'}
//];
//
//const json = JSON.stringify(pessoas, '', 2);
//
//escrever(caminhoArquivo, json);

async function lerArquivo (caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    console.log(dados);
}

lerArquivo(caminhoArquivo);
