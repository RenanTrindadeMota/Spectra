function addAoCarrinho() {
    // Obter os produtos já existentes no carrinho
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Definir os dados do produto
    const produto = {
        nome: "Iphone 14",
        preco: "R$3999,99",
        imagem: "../img/iphone-14.png", // Caminho da imagem
        quantidade: 1 // Inicia com quantidade 1
    };

    // Verificar se o produto já existe no carrinho
    const produtoExistente = carrinho.find(item => item.nome === produto.nome);

    if (produtoExistente) {
        // Se o produto já estiver no carrinho, incrementar a quantidade
        produtoExistente.quantidade += 1;
    } else {
        // Caso contrário, adicionar o produto ao carrinho
        carrinho.push(produto);
    }

    // Armazenar o carrinho atualizado no LocalStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Redirecionar para a página do carrinho
    window.location.href = '../../carrinho/carrinho.html';
}


// function addAoCarrinho() {
//     localStorage.removeItem('produtoCarrinho');

//     // Definir os dados do produto
//     const produto = {
//         nome: "Iphone 15 Pro",
//         preco: "R$2999,99",
//         imagem: "../img/iphone_15_pro.png" // Caminho da imagem
//     };

//     // Armazenar no LocalStorage
//     localStorage.setItem('produtoCarrinho', JSON.stringify(produto));

//     // Redirecionar para a página do carrinho
//     window.location.href = '../../carrinho/carrinho.html';
// }

// const produtoIndex = produtoCarrinho.findIndex(produto => produto.nome === nome);

// if (produtoIndex > -1) {
//     // O produto já está nos produtoCarrinho, então removemos
//     produtoCarrinho.splice(produtoIndex, 1);
//     localStorage.setItem('produtoCarrinho', JSON.stringify(produtoCarrinho));
// } else {
//     // O produto não está nos produtoCarrinho, então adicionamos
//     produtoCarrinho.push({ imgSrc, nome, preco });
//     localStorage.setItem('produtoCarrinho', JSON.stringify(produtoCarrinho));
// }

// // Atualiza o estado do botão
// atualizarBotaoFavoritos(cardId);

// document.addEventListener('DOMContentLoaded', () => {
    
// });