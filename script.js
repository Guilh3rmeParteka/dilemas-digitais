// ================================
// DILEMAS DIGITAIS
// Termos de Uso
// ================================

const solutions = {

    privacidade: {
        title: "🔒 Privacidade e proteção de dados",
        description:
            "Os sites devem explicar de forma clara quais dados são coletados, por que são necessários e durante quanto tempo serão armazenados.",
        items: [
            "Criar um resumo visual sobre a coleta de dados.",
            "Explicar a finalidade de cada tipo de dado coletado.",
            "Permitir que o usuário altere suas preferências.",
            "Oferecer uma forma simples de excluir os dados."
        ]
    },

    complexidade: {
        title: "📚 Termos mais fáceis de entender",
        description:
            "Documentos jurídicos podem continuar existindo, mas o usuário deveria receber uma versão resumida e escrita em linguagem simples.",
        items: [
            "Criar um resumo dos pontos mais importantes.",
            "Destacar mudanças importantes nos termos.",
            "Usar exemplos para explicar regras complexas.",
            "Permitir que o usuário consulte o documento completo."
        ]
    },

    aceitacao: {
        title: "✅ Aceitação consciente",
        description:
            "Em vez de depender apenas de um botão de 'Aceitar', os sites podem apresentar as informações mais importantes antes do consentimento.",
        items: [
            "Mostrar um resumo antes da aceitação.",
            "Destacar direitos e responsabilidades.",
            "Avisar quando os termos forem modificados.",
            "Evitar que o usuário seja pressionado a aceitar rapidamente."
        ]
    },

    consentimento: {
        title: "🎯 Consentimento realmente livre",
        description:
            "As opções de aceitar ou recusar determinadas práticas devem ser apresentadas de maneira equilibrada, sem esconder a alternativa de recusa.",
        items: [
            "Deixar aceitar e recusar igualmente visíveis.",
            "Permitir escolher quais dados serão compartilhados.",
            "Evitar configurações pré-selecionadas quando possível.",
            "Facilitar a alteração das escolhas posteriormente."
        ]
    }
};


// ================================
// SISTEMA DE SOLUÇÕES
// ================================

const buttons = document.querySelectorAll(".solution-btn");
const solutionDisplay = document.getElementById("solution-display");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const target = button.dataset.target;
        const solution = solutions[target];

        if (!solution) {
            return;
        }

        solutionDisplay.innerHTML = `
            <div class="solution-content">
                <h3>${solution.title}</h3>

                <p>${solution.description}</p>

                <ul>
                    ${solution.items.map(item => `<li>${item}</li>`).join("")}
                </ul>
            </div>
        `;

        // Leva o usuário até a solução.
        solutionDisplay.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});


// ================================
// QUIZ
// ================================

const quizButtons = document.querySelectorAll(".quiz-options button");
const quizResult = document.getElementById("quiz-result");

quizButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.dataset.answer;

        if (answer === "correct") {

            quizResult.textContent =
                "✓ Correto! Verificar como seus dados serão utilizados é uma atitude importante antes de aceitar.";

            quizResult.className = "correct";

        } else {

            quizResult.textContent =
                "✕ Essa não é a melhor opção. Procure entender pelo menos os pontos principais antes de aceitar.";

            quizResult.className = "wrong";

        }

    });

});


// ================================
// ANIMAÇÃO AO APARECER NA TELA
// ================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


// ================================
// CONSOLE
// ================================

console.log(
    "Dilemas Digitais carregado! " +
    "Projeto sobre transparência e cidadania digital."
);