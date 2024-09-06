

function addAoProdutos(nome, preco) {
    let produto = JSON.parse(localStorage.getItem('produtos')) || [];

    const produtoExistente = produtos.find(p => p.nome === nome);

    if (produtoExistente) {
        produtoExistente.quantidade += 1
    } else {
        produtos.push ({nome,preço,quantidade:1,imagem:` /100?text=${encodeURLComponent(nome)}`})
    }
    localStorage.setItem('produtos', JSON.stringify(produtos));
    // alert(nome + ' foi adicionado ao produtos!');
}

// Remove um item do produtos
function removerDoCarrinho(nome) {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos = produtos.filter(p => p.nome !== nome);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    atualizarprodutos(); // Atualiza a página do produtos
}

// Atualiza o produtos na página
function atualizarProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const produtosContainer = document.getElementById('produtos');
    const totalContainer = document.getElementById('total');
    
    produtosContainer.innerHTML = '';

    if (produtos.length === 0) {
        produtosContainer.innerHTML = '<p>Seu produtos está vazio.</p>';
        totalContainer.innerText = 'Total: R$0,00';
        return;
    }

    let total = 0;

    produtos.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'card-total';
        itemElement.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="card">
                <h2>${item.nome}</h2>
                <p>R$${item.preco.toFixed(2)}</p>
                <p>Quantidade: ${item.quantidade}</p>
                <p>Subtotal: R$${(item.preco * item.quantidade).toFixed(2)}</p>
            </div>
            <button onclick="removerDoprodutos('${item.nome}')">Remover</button>
        `;
        produtosContainer.appendChild(itemElement);
        total += item.preco * item.quantidade;
    });

    totalContainer.innerText = `Total: R$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', atualizarprodutos);