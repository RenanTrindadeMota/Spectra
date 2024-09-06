document.addEventListener('DOMContentLoaded', atualizarProdutos);

function atualizarProdutos() {
    const produtoContainer = document.getElementById('produto');
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (favoritos.length === 0) {
        produtoContainer.innerHTML = '<p>Nenhum produto favorito encontrado.</p>';
        return;
    }

    produtoContainer.innerHTML = ''; // Limpar o container para evitar duplicações

    favoritos.forEach((favorito, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = favorito.imgSrc;
        img.alt = favorito.nome;

        const nome = document.createElement('p');
        nome.classList.add('nome');
        nome.textContent = favorito.nome;

        const preco = document.createElement('p');
        preco.classList.add('preco');
        preco.textContent = favorito.preco;

        const removerButton = document.createElement('button');
        removerButton.textContent = 'Remover';
        removerButton.onclick = () => removerFavorito(index);

        card.appendChild(img);
        card.appendChild(nome);
        card.appendChild(preco);
        card.appendChild(removerButton);

        produtoContainer.appendChild(card);
    });

    document.getElementById('total').textContent = `Total de Produtos: ${favoritos.length}`;
}

function removerFavorito(index) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos.splice(index, 1); // Remove o item do array
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    atualizarProdutos(); // Atualiza a lista de produtos na página
}