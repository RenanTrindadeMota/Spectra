document.addEventListener("DOMContentLoaded", function() {
    // Verificar se há um produto no LocalStorage
    const produto = JSON.parse(localStorage.getItem('produtoCarrinho'));

    if (produto) {
        // Selecionar os elementos onde o produto será exibido
        const produtoContainer = document.getElementById('produto');  //const que em que os itens do produto serão colocados
        const totalContainer = document.getElementById('total');

        // Exibir o produto no carrinho
        produtoContainer.innerHTML =            // se a const produtoContainer tiver elementos que foram salvos no produto, o innerHTML permite inserir na tela
        ` 
            <div class="card-carrinho">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <div class="titulo-card">
                    <p class="nome-carrinho">${produto.nome}</p>
                    <p class="preco-carrinho">${produto.preco}</p>
                </div>
                <div class="mais_menos">
                    <div class="negativo"></div>
                    <div class="quantidade"></div>
                    <div class="positivo"></div>
                </div>
            </div>
        `;

        // Exibir o preço total
        totalContainer.innerHTML = `<p>Total: ${produto.preco}</p>`;
    } else {
        // Se não houver produto no LocalStorage, exibir uma mensagem
        const produtoContainer = document.getElementById('produto');
        produtoContainer.innerHTML = `<p>Seu carrinho está vazio</p>`;
    }
});


// if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", Iniciar);
// } else {
//     Iniciar();
// }

// function Iniciar() {
//     const produtosChange = document.getElementsByClassName("carrinho-btn");
    
//     for (let i = 0; i < produtosChange.length; i++) {
//         const produtoQuantidade = produtosChange[i].getElementsByClassName("quantidade")[0];
//         const adicionarProduto = produtosChange[i].getElementsByClassName("positivo")[0];
//         const removeProduto = produtosChange[i].getElementsByClassName("negativo")[0];
        
//         adicionarProduto.addEventListener("click", () => alterarQuantidade(produtoQuantidade, 1));
//         removeProduto.addEventListener("click", () => alterarQuantidade(produtoQuantidade, -1));
//     }

//     atualizarValor();
// }

// function alterarQuantidade(quantidadeElemento, delta) {
//     let quantidade = parseInt(quantidadeElemento.value, 10);
//     quantidade = Math.max(0, quantidade + delta); // Impede quantidade negativa
//     quantidadeElemento.value = quantidade;

//     if (quantidade === 0) {
//         removerProduto(quantidadeElemento);
//     }

//     atualizarValor();
// }

// function removerProduto(quantidadeElemento) {
//     const produtoElemento = quantidadeElemento.closest('.produto');
//     if (produtoElemento) {
//         produtoElemento.parentElement.parentElement.remove(); // Remove o produto do carrinho
//     }
// }

// function atualizarValor() {
//     let valorTotal = 0;
//     const produtosInfo = document.getElementsByClassName("carrinho-btn");

//     for (let i = 0; i < produtosInfo.length; i++) {
//         const produtoPreco = parseFloat(produtosInfo[i].getElementsByClassName("preco")[0].innerText.replace("R$", "").replace(",", "."));
//         const produtoQuantidade = parseInt(produtosInfo[i].getElementsByClassName("quantidade")[0].value, 10);

//         valorTotal += (produtoPreco * produtoQuantidade);
//     }

//     uptdate(valorTotal);
// }

// function uptdate(valorTotal) {
//     document.querySelector("#total span").innerText = `R$${valorTotal.toFixed(2).replace(".", ",")}`;
// }