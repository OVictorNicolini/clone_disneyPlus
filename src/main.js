document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    
    for (let i = 0; i < buttons.length; i++) { // i é o índice do botão e length é o número de botões
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton; // data-tab-button é o atributo do botão que contém o nome da aba
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`); // data-tab-id é o atributo da aba que contém o nome da aba
            escondeTodasAbas(); // chama a função para esconder todas as abas
            aba.classList.add('shows__list--is-active'); // adiciona a classe que mostra a aba ativa
        })
    }
})

function escondeTodasAbas () {
    const tabsContainer = document.querySelector('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) { //
        tabsContainer[i].classList.remove('shows__list--is-active'); // remove a classe que mostra a aba ativa
    }
}