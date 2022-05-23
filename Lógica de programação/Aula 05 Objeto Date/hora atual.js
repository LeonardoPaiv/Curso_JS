
const formataData = (data) => {
    const dia = zeroAEsqueda(data.getDate());
    const mes = zeroAEsqueda(data.getMonth());
    const ano = zeroAEsqueda(data.getFullYear());
    const hora = zeroAEsqueda(data.getHours());
    const min = zeroAEsqueda(data.getMinutes());
    const seg = zeroAEsqueda(data.getSeconds());

    return `${dia}/${mes}/${ano}/ ${hora}:${min}:${seg}`;
}

const zeroAEsqueda = (num) => {
    return num >= 10 ? num : `0${num}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
