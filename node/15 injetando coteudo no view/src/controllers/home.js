
exports.homepage = (req, res) => {
    res.render('index', {
        titulo: 'Esse é o titulo da minha pagina',
        numeros: [1,2,3,4,5,6,7,8,9]
    });
};

exports.trataResposta = (req, res) => {
    res.send('Resposta enviada');
}