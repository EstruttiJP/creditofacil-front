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
