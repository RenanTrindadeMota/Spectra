document.addEventListener('DOMContentLoaded', atualizarProdutos);

function atualizarProdutos() {
    const produtoContainer = document.getElementById('produto');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        produtoContainer.innerHTML = '<p>O carrinho está vazio.</p>';
        return;
    }

    produtoContainer.innerHTML = ''; // Limpar o container para evitar duplicações


    
    carrinho.forEach((pCarrinho, index) => {           //pCarrinho é abreviação de produto_carrinho
        const card = document.createElement('div');
        card.classList.add('card');

        const carrinhoButton = document.createElement('div');
        carrinhoButton.classList.add('carrinho-btn');

        const positivo = document.createElement('button');
        positivo.classList.add('positivo');

        const quantidade = document.createElement('p');
        quantidade.classList.add('quantidade');
        quantidade.textContent = "1";

        const negativo = document.createElement('button');
        negativo.classList.add('negativo');

        const img = document.createElement('img');
        img.src = pCarrinho.imgSrc;
        img.alt = pCarrinho.nome;

        const titulo_card = document.createElement('div');
        titulo_card.classList.add('titulo-card');

        const nome = document.createElement('p');
        nome.classList.add('nome');
        nome.textContent = pCarrinho.nome;

        const preco = document.createElement('p');
        preco.classList.add('preco');
        preco.textContent = pCarrinho.preco;

        card.appendChild(carrinhoButton);
        carrinhoButton.appendChild(positivo);
        carrinhoButton.appendChild(quantidade);
        carrinhoButton.appendChild(negativo);
        card.appendChild(img);
        card.appendChild(titulo_card)
        titulo_card.appendChild(nome);
        titulo_card.appendChild(preco);

        produtoContainer.appendChild(card);
    });

    document.getElementById('total').textContent = `Total: `;
}

// function removerFavorito(index) {
//     const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
//     favoritos.splice(index, 1); // Remove o item do array
//     localStorage.setItem('favoritos', JSON.stringify(favoritos));
//     atualizarProdutos(); // Atualiza a lista de produtos na página
// }