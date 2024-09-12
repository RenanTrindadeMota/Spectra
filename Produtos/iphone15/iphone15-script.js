
function addAoCarrinho() {
    localStorage.removeItem('produtoCarrinho');

    // Definir os dados do produto
    const produto = {
        nome: "Iphone 15 Pro",
        preco: "R$2999,99",
        imagem: "../img/iphone_15_pro.png" // Caminho da imagem
    };

    // Armazenar no LocalStorage
    localStorage.setItem('produtoCarrinho', JSON.stringify(produto));

    // Redirecionar para a página do carrinho
    window.location.href = '../../carrinho/carrinho.html';
}

const produtoIndex = produtoCarrinho.findIndex(produto => produto.nome === nome);

if (produtoIndex > -1) {
    // O produto já está nos produtoCarrinho, então removemos
    produtoCarrinho.splice(produtoIndex, 1);
    localStorage.setItem('produtoCarrinho', JSON.stringify(produtoCarrinho));
} else {
    // O produto não está nos produtoCarrinho, então adicionamos
    produtoCarrinho.push({ imgSrc, nome, preco });
    localStorage.setItem('produtoCarrinho', JSON.stringify(produtoCarrinho));
}

// Atualiza o estado do botão
atualizarBotaoFavoritos(cardId);

document.addEventListener('DOMContentLoaded', () => {
    
});