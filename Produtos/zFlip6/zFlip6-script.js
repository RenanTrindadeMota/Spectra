function addAoCarrinho() {
    // Obter os produtos já existentes no carrinho
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Definir os dados do produto
    const produto = {
        nome: "Galaxy Z Flip",
        preco: "R$7999,99",
        imagem: "../img/zFlip6-1.png", // Caminho da imagem
        quantidade: 1 // Inicia com quantidade 1
    };

    // Verificar se o produto já existe no carrinho
    const produtoExistente = carrinho.find(item => item.nome === produto.nome);

    if (produtoExistente) {
        // Se o produto já estiver no carrinho, incrementar a quantidade
        produtoExistente.quantidade += 1;
        carrinho[produtoExistenteIndex].imagem = produto.imagem; // Atualizar o caminho da imagem
        carrinho[produtoExistenteIndex].preco = produto.preco;   // Atualizar o preço (se necessário)
    } else {
        // Caso contrário, adicionar o produto ao carrinho
        carrinho.push(produto);
    }

    // Armazenar o carrinho atualizado no LocalStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Redirecionar para a página do carrinho
    window.location.href = '../../carrinho/carrinho.html';
}
