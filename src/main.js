document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]'); // Seleciona todas as abas

    for (let i = 0; i < buttons.length; i++) { // i é o índice do botão e length é o número de botões
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton; // data-tab-button é o atributo do botão que contém o nome da aba
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`); // data-tab-id é o atributo da aba que contém o nome da aba

            escondeTodasAbas(); // chama a função para esconder todas as abas
            aba.classList.add('shows__list--is-active'); // adiciona a classe que mostra a aba ativa

            removeBotaoAtivo(); // chama a função para remover o botão ativo
            botao.target.classList.add('shows__tabs__button--is-active'); // adiciona a classe que mostra o botão ativo
        });
    }

    for (let i = 0; i < questions.length; i++) { // i é o índice do botão e length é o número de botões
        questions[i].addEventListener('click', abreOuFechaResposta); // adiciona o evento de clique para abrir ou fechar a resposta{
    }
})

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open'; // classe que mostra a resposta
    const elementoPai = elemento.target.parentNode; // seleciona o elemento pai do botão clicado

    elementoPai.classList.toggle(classe); // adiciona ou remove a classe que mostra a resposta
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // seleciona todos os botões com o atributo data-tab-button

    for (let i = 0; i < buttons.length; i++) { // i é o índice do botão e length é o número de botões
        buttons[i].classList.remove('shows__tabs__button--is-active'); // remove a classe que mostra o botão ativo
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); // Seleciona todas as abas

    for (let i = 0; i < tabsContainer.length; i++) { // Itera sobre todas as abas
        tabsContainer[i].classList.remove('shows__list--is-active'); // Remove a classe ativa de cada aba
    }
}
