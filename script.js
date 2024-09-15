//função para botão de coração(favoritos):
function addAoFavoritos(cardId) {
    const card = document.getElementById(cardId);
    const imgSrc = card.querySelector('img').src;
    const nome = card.querySelector('.nome').textContent;
    const preco = card.querySelector('.preco').textContent;
    
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Verifica se o produto já está nos favoritos
    const produtoIndex = favoritos.findIndex(favorito => favorito.nome === nome);

    if (produtoIndex > -1) {
        // O produto já está nos favoritos, então removemos
        favoritos.splice(produtoIndex, 1);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    } else {
        // O produto não está nos favoritos, então adicionamos
        favoritos.push({ imgSrc, nome, preco });
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
    
    // Atualiza o estado do botão
    atualizarBotaoFavoritos(cardId);
}

function atualizarBotaoFavoritos(cardId) {
    const card = document.getElementById(cardId);
    const botaoFavoritos = card.querySelector('.favoritos');
    
    // Verifica se o produto está nos favoritos para definir o estado do botão
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const nome = card.querySelector('.nome').textContent;
    const produtoIndex = favoritos.findIndex(favorito => favorito.nome === nome);
    
    if (produtoIndex > -1) {
        // O produto está nos favoritos, então mostramos a imagem de coração preto
        botaoFavoritos.style.backgroundImage = "url('img/coração-preto.png')";
    } else {
        // O produto não está nos favoritos, então mostramos a imagem de coração branco
        botaoFavoritos.style.backgroundImage = "url('img/coração-branco.png')";
    }
}

// Atualiza o estado do botão quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => atualizarBotaoFavoritos(card.id));
});

//função do click do card de cada produto
function selecionarProduto(cardElement) {
    // Obter os elementos internos do card usando querySelector com base nas classes
    const nome = cardElement.querySelector('.nome').textContent;
    const preco = cardElement.querySelector('.preco').textContent;
    const imagem = cardElement.querySelector('.imagem-produto').src;

    // Montar o objeto do produto
    const produto = {
        nome: nome,
        preco: preco,
        imagem: imagem
    };

    // Salvar o produto no localStorage
    localStorage.setItem('produtoSelecionado', JSON.stringify(produto));

    // Redirecionar para a página de detalhes do produto
    const url = cardElement.getAttribute('data-url');
    window.location.href = url;
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

