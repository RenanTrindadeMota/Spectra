document.addEventListener("DOMContentLoaded", function () {
    // Verificar se há um produto no LocalStorage
    const produto = JSON.parse(localStorage.getItem('produtoCarrinho'));
    // favoritos.forEach((favorito, index) => {
        if (produto) {
            
            // Selecionar os elementos onde o produto será exibido
            const produtoContainer = document.getElementById('produto');
            const totalContainer = document.getElementById('total');

            // Exibir o produto no carrinho
            produtoContainer.innerHTML = `
                <div class="card-carrinho">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <div class="titulo-card">
                        <p class="nome-carrinho">${produto.nome}</p>
                        <p class="preco-carrinho">${produto.preco.replace(".", ",")}</p>
                    </div>
                    <div class="mais_menos">
                        <button class="negativo" onclick="alterarQuantidade(-1)">-</button>
                        <div class="quantidade" id="quantidade">1</div>
                        <button class="positivo" onclick="alterarQuantidade(1)">+</button>
                    </div>
                </div>
            `;
            

            // Exibir o preço total
            totalContainer.innerHTML = `<p>Total: ${produto.preco}</p>`;
            
            atualizarValor(); // Atualizar o valor inicial
        } else {
            // Se não houver produto no LocalStorage, exibir uma mensagem
            const produtoContainer = document.getElementById('produto');
            produtoContainer.innerHTML = `<p>Seu carrinho está vazio</p>`;
        }
    // }
});



// Função para alterar a quantidade de produtos
function alterarQuantidade(delta) {
    const quantidadeElemento = document.getElementById("quantidade");
    let quantidade = parseInt(quantidadeElemento.innerText, 10);

    quantidade = Math.max(0, quantidade + delta); // Impede quantidade negativa

    quantidadeElemento.innerText = quantidade;

    if (quantidade === 0) {
        removerProduto(); // Remover o produto quando a quantidade for 0
    }

    atualizarValor(); // Atualizar o valor total após alterar a quantidade
}

// Função para remover o produto
function removerProduto() {
    const produtoContainer = document.getElementById('produto');
    produtoContainer.innerHTML = `<p>Seu carrinho está vazio</p>`;
    localStorage.removeItem('produtoCarrinho'); // Remover do LocalStorage
    document.getElementById('total').innerHTML = `<p>Total: R$0,00</p>`;
}

// Função para atualizar o valor total
function atualizarValor() {
    const produto = JSON.parse(localStorage.getItem('produtoCarrinho'));
    const quantidade = parseInt(document.getElementById("quantidade").innerText, 10);
    
    if (produto) {
        const produtoPreco = parseFloat(produto.preco.replace("R$", "").replace(",", "."));
        const valorTotal = produtoPreco * quantidade;
        
        // Atualizar o valor total no DOM
        document.getElementById('total').innerHTML = `<p>Total: R$${valorTotal.toFixed(2).replace(".", ",")}</p>`;
    }
}

// document.getElementById('total').textContent = `Total de Produtos: ${favoritos.length}`