
exports.homepage = (req, res) => {
    res.render('index');
};

exports.trataResposta = (req, res) => {
    res.send('Resposta enviada');
}