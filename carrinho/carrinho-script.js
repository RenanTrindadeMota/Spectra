// Função para alterar a quantidade de produtos
function alterarQuantidade(index, delta) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    if (carrinho[index]) {
        // Atualizar a quantidade do produto
        carrinho[index].quantidade = Math.max(0, carrinho[index].quantidade + delta);

        // Remover o produto se a quantidade for 0
        if (carrinho[index].quantidade === 0) {
            carrinho.splice(index, 1); // Remove o produto do array
        }

        // Atualizar o carrinho no localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        // Recarregar os produtos na interface
        carregarCarrinho(); // Chama a função que atualiza o DOM com o estado do carrinho
    }
}

// Função para carregar e atualizar o carrinho na interface
function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoContainer = document.getElementById('produto');
    const totalContainer = document.getElementById('total');

    // Limpar o container de produtos
    produtoContainer.innerHTML = "";

    if (carrinho.length > 0) {
        let total = 0;

        carrinho.forEach((produto, index) => {
            const precoUnitario = parseFloat(produto.preco.replace("R$", "").replace(".", "").replace(",", "."));
            total += precoUnitario * produto.quantidade;

            // Exibir cada produto no carrinho
            produtoContainer.innerHTML += `
                <div class="card-carrinho">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <div class="titulo-card">
                        <p class="nome-carrinho">${produto.nome}</p>
                        <p class="preco-carrinho">R$${(precoUnitario).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div class="mais_menos">
                        <button class="negativo" onclick="alterarQuantidade(${index}, -1)">-</button>
                        <div class="quantidade" id="quantidade-${index}">${produto.quantidade}</div>
                        <button class="positivo" onclick="alterarQuantidade(${index}, 1)">+</button>
                    </div>
                </div>
            `;
        });

        // Exibir o total
        totalContainer.innerHTML = `<p>Total: R$${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`;
    } else {
        // Se o carrinho estiver vazio
        produtoContainer.innerHTML = `<p>Seu carrinho está vazio</p>`;
        totalContainer.innerHTML = `<p>Total: R$0,00</p>`;
    }
}

// Chamar carregarCarrinho ao carregar a página para garantir que o carrinho seja atualizado
document.addEventListener("DOMContentLoaded", carregarCarrinho);
