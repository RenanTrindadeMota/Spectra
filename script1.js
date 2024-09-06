function addAoFavoritos(cardId) {
    const card = document.getElementById(cardId);
    const imgSrc = card.querySelector('img').src;
    const nome = card.querySelector('.nome').textContent;
    const preco = card.querySelector('.preco').textContent;
    
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    favoritos.push({ imgSrc, nome, preco });
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert('Produto adicionado aos favoritos!');
}