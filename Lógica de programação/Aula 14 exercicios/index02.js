const ePaisagem = (imagem) => {
    const [largura, altura] = imagem;
    return largura > altura;
}

const imagem1 = [1920, 1080];

console.log(ePaisagem(imagem1));