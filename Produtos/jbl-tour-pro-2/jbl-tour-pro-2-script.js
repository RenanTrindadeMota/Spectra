document.addEventListener("DOMContentLoaded", function () {
    // Recuperar o produto selecionado do localStorage
    const produto = JSON.parse(localStorage.getItem('produtoSelecionado'));
})


function addAoCarrinho() {
    // Obter os produtos já existentes no carrinho
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Recuperar os dados desse produto
    const produto = JSON.parse(localStorage.getItem('produtoSelecionado'));

    // Verificar se o produto já existe no carrinho
    if (produto) {
        produto.quantidade = 1; // Inicia com quantidade 1

        // Verificar se o produto já existe no carrinho
        const produtoExistente = carrinho.find(item => item.nome === produto.nome);

        if (produtoExistente) {
            // Se o produto já estiver no carrinho, incrementar a quantidade
            produtoExistente.quantidade += 1;
        } else {
            // Caso contrário, adicionar o produto ao carrinho
            carrinho.push(produto);
        }
    }
    // Armazenar o carrinho atualizado no LocalStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Redirecionar para a página do carrinho
    window.location.href = '../../carrinho/carrinho.html';
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
