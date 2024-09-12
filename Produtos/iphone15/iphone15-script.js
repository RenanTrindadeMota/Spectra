function addAoCarrinho() {
    localStorage.removeItem('produtoCarrinho');

    // Definir os dados do produto
    const produto = {
        nome: "Iphone 15 Pro",
        preco: "R$2999.99",
        imagem: "../img/iphone_15_pro.png" // Caminho da imagem
    };

    // Armazenar no LocalStorage
    localStorage.setItem('produtoCarrinho', JSON.stringify(produto));

    // Redirecionar para a página do carrinho
    window.location.href = '../../carrinho/carrinho.html';
}
