

document.addEventListener("click", e => {

    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);
    
        if (response.status !== 200) throw new Error('ERROR DIF 200');
    
        const html = await response.text();
        carregarResultado(html)
        
    } catch(e) {
        console.error(e);
    }
}
        

function carregarResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}





fetch('pagina04.html', {})
.then(resposta => {
    if(resposta !== 200) throw new Error('Error 404 nosso');
})
.then(html => console.log(html))
.catch(e => console.error(e))