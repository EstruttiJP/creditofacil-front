const cabecalho = document.querySelector(".header");
const botaoMenu = document.querySelector(".menu-botao");

cabecalho.classList.add("menu-pronto");

function fecharMenu() {
  cabecalho.classList.remove("menu-aberto");
  botaoMenu.setAttribute("aria-expanded", "false");
  botaoMenu.setAttribute("aria-label", "Abrir menu");
}

function abrirMenu() {
  cabecalho.classList.add("menu-aberto");
  botaoMenu.setAttribute("aria-expanded", "true");
  botaoMenu.setAttribute("aria-label", "Fechar menu");
}

botaoMenu.addEventListener("click", function () {
  if (cabecalho.classList.contains("menu-aberto")) {
    fecharMenu();
  } else {
    abrirMenu();
  }
});

cabecalho.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    fecharMenu();
  }
});

// validação do formulário de contato
const botaoEnviar = document.querySelector("#botao-enviar");
const campoNome = document.querySelector("#contato-nome");
const campoEmail = document.querySelector("#contato-email");
const campoMensagem = document.querySelector("#contato-mensagem");
const avisoNome = document.querySelector("#aviso-nome");
const avisoEmail = document.querySelector("#aviso-email");
const avisoMensagem = document.querySelector("#aviso-mensagem");

// mostra o erro no campo e devolve true se ele estiver vazio
const campoVazio = (campo, aviso, mensagem) => {
  if (campo.value.trim() === "") {
    campo.classList.add("campo-erro");
    aviso.textContent = mensagem;
    return true;
  }

  campo.classList.remove("campo-erro");
  aviso.textContent = "";
  return false;
};

if (botaoEnviar) {
  botaoEnviar.addEventListener("click", (e) => {
    const nomeVazio = campoVazio(campoNome, avisoNome, "Preencha seu nome.");
    const emailVazio = campoVazio(campoEmail, avisoEmail, "Preencha seu e-mail.");
    const mensagemVazia = campoVazio(campoMensagem, avisoMensagem, "Escreva sua mensagem.");

    if (nomeVazio || emailVazio || mensagemVazia) {
      e.preventDefault();
    }
  });
}
