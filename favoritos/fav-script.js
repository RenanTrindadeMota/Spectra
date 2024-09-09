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

        const removerButton = document.createElement('button');
        removerButton.classList.add('remover-btn')
        // removerButton.textContent = 'Remover';
        removerButton.onclick = () => removerFavorito(index);

        const img = document.createElement('img');
        img.src = favorito.imgSrc;
        img.alt = favorito.nome;

        const titulo_card = document.createElement('div');
        titulo_card.classList.add('titulo-card');

        const nome = document.createElement('p');
        nome.classList.add('nome');
        nome.textContent = favorito.nome;

        const preco = document.createElement('p');
        preco.classList.add('preco');
        preco.textContent = favorito.preco;

        card.appendChild(removerButton);
        card.appendChild(img);
        titulo_card.appendChild(nome);
        titulo_card.appendChild(preco);
        card.appendChild(titulo_card)


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