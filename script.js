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
        alert('Produto removido dos favoritos!');
    } else {
        // O produto não está nos favoritos, então adicionamos
        favoritos.push({ imgSrc, nome, preco });
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert('Produto adicionado aos favoritos!');
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