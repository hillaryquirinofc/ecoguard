let pontuacao = 0;
let perguntasRespondidas = 0;
const totalPerguntas = 8;

function verificarResposta(botao, correta) {

    const card = botao.parentElement;

    // impede responder a mesma pergunta mais de uma vez
    if (card.classList.contains("respondida")) {
        return;
    }

    card.classList.add("respondida");
    perguntasRespondidas++;

    const botoes = card.querySelectorAll("button");

    botoes.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.7";
    });

    if (correta) {
        pontuacao++;
        botao.style.backgroundColor = "#2ecc71";
        alert("✅ Resposta correta!");
    } else {
        botao.style.backgroundColor = "#e74c3c";

        // destaca a resposta correta
        botoes.forEach(btn => {
            if (btn.dataset.correta === "true") {
                btn.style.backgroundColor = "#2ecc71";
            }
        });

        alert("❌ Resposta incorreta!");
    }

    if (perguntasRespondidas === totalPerguntas) {
        mostrarResultado();
    }
}

function mostrarResultado() {

    let nivel = "";

    if (pontuacao <= 2) {
        nivel = "🌱 Explorador Ambiental";
    }
    else if (pontuacao <= 5) {
        nivel = "🦜 Protetor da Fauna";
    }
    else if (pontuacao <= 7) {
        nivel = "🌳 Guardião das UCs";
    }
    else {
        nivel = "🌎 Mestre da Biodiversidade";
    }

    setTimeout(() => {
        alert(
            `Quiz finalizado!\n\n` +
            `Pontuação: ${pontuacao}/${totalPerguntas}\n\n` +
            `Título conquistado:\n${nivel}`
        );
    }, 500);
}

function verificarResposta(botao, correta) {

    const card = botao.parentElement;
    const resultado = card.querySelector(".resultado");

    // impede responder duas vezes
    if (card.classList.contains("respondida")) {
        return;
    }

    card.classList.add("respondida");

    const botoes = card.querySelectorAll("button");

    botoes.forEach(btn => {
        btn.disabled = true;
    });

    if (correta) {
        botao.style.backgroundColor = "#2ecc71";

        resultado.innerHTML = "✅ Você acertou!";
        resultado.className = "resultado correto";
    } else {
        botao.style.backgroundColor = "#e74c3c";

        resultado.innerHTML = "❌ Você errou!";
        resultado.className = "resultado errado";

        // destaca a resposta correta
        botoes.forEach(btn => {
            if (btn.dataset.correta === "true") {
                btn.style.backgroundColor = "#2ecc71";
            }
        });
    }
}