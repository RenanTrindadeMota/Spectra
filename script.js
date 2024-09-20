//função para botão de coração(favoritos):
function addAoFavoritos(cardId) {
    const card = document.getElementById(cardId);
    const imgSrc = card.querySelector('img').src;
    const nome = card.querySelector('.nome').textContent;
    const preco = card.querySelector('.preco').textContent;
    
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Verifica se o produto já está nos favoritos
    const produtoIndex = favoritos.findIndex(favorito => favorito.nome === nome);

    if (produtoIndex > -1) {
        // O produto já está nos favoritos, então removemos
        favoritos.splice(produtoIndex, 1);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    } else {
        // O produto não está nos favoritos, então adicionamos
        favoritos.push({ imgSrc, nome, preco });
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
    
    // Atualiza o estado do botão
    atualizarBotaoFavoritos(cardId);
}

function atualizarBotaoFavoritos(cardId) {
    const card = document.getElementById(cardId);
    const botaoFavoritos = card.querySelector('.favoritos');
    
    // Verifica se o produto está nos favoritos para definir o estado do botão
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const nome = card.querySelector('.nome').textContent;
    const produtoIndex = favoritos.findIndex(favorito => favorito.nome === nome);
    
    if (produtoIndex > -1) {
        // O produto está nos favoritos, então mostramos a imagem de coração preto
        botaoFavoritos.style.backgroundImage = "url('img/coração-preto.png')";
    } else {
        // O produto não está nos favoritos, então mostramos a imagem de coração branco
        botaoFavoritos.style.backgroundImage = "url('img/coração-branco.png')";
    }
}

// Atualiza o estado do botão quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => atualizarBotaoFavoritos(card.id));
});

//função do click do card de cada produto
function selecionarProduto(cardElement) {
    // Obter os elementos internos do card usando querySelector com base nas classes
    const nome = cardElement.querySelector('.nome').textContent;
    const preco = cardElement.querySelector('.preco').textContent;
    const imagem = cardElement.querySelector('.imagem-produto').src;

    // Montar o objeto do produto
    const produto = {
        nome: nome,
        preco: preco,
        imagem: imagem
    };

    // Salvar o produto no localStorage
    localStorage.setItem('produtoSelecionado', JSON.stringify(produto));

    // Redirecionar para a página de detalhes do produto
    const url = cardElement.getAttribute('data-url');
    window.location.href = url;
}

function addAoCarrinho(cardElement) {

    const nome = cardElement.querySelector('.nome').textContent;
    const preco = cardElement.querySelector('.preco').textContent;
    const imagem = cardElement.querySelector('.imagem-produto').src;

    const produto = {
        nome: nome,
        preco: preco,
        imagem: imagem
    };

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const produtoExistente = carrinho.find(item => item.nome === produto.nome);

    let mensagem = '';
    if (produtoExistente) {
        // Se o produto já estiver no carrinho, incrementar a quantidade
        produtoExistente.quantidade += 1;
        mensagem = 'Produto adicionado novamente ao carrinho!';
    } else {
        // Caso contrário, adicionar o produto ao carrinho com quantidade 1
        produto.quantidade = 1;
        carrinho.push(produto);
        mensagem = 'Produto adicionado ao carrinho!';
    }

    // Armazenar o carrinho atualizado no LocalStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Exibir a mensagem de adição ao carrinho
    exibirMensagem(mensagem);
}



function exibirMensagem(mensagem) {
    const mensagemDiv = document.createElement('div');
    mensagemDiv.className = 'mensagem-carrinho';
    mensagemDiv.textContent = mensagem;

    document.body.appendChild(mensagemDiv);

    // Remover a mensagem após 3 segundos
    setTimeout(() => {
        mensagemDiv.remove();
    }, 3000);
}


//função do header para mudança de cor
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//função do carrossel
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');


let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 6000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 6000); 
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};







