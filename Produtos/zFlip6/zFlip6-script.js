function addAoCarrinho() {
    localStorage.removeItem('produtoCarrinho');

    // Definir os dados do produto
    const produto = {
        nome: "Galaxy Z Flip6",
        preco: "R$7999,99",
        imagem: "../img/zFlip6-1.png" // Caminho da imagem
    };

    // Armazenar no LocalStorage
    localStorage.setItem('produtoCarrinho', JSON.stringify(produto));

    // Redirecionar para a página do carrinho
    window.location.href = '../../carrinho/carrinho.html';
}
