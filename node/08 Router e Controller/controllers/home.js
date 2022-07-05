exports.homepage = (req, res) => {
    res.send(`
    <form action="/" method="POST"> 
    Nome do cliente: <input type="text" name="nome">
    <button>Olá Mundo</button>
    `);
};

exports.trataResposta = (req, res) => {
    res.send('Resposta enviada');
}