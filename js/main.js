const abrirmenuBtn = document.querySelector(".abrirMenu");
const cerrarMenuBtn = document.querySelector(".cerrarMenu");

function abrirMenu() {
    abrirMenu.classList.add("abrirMenu");
}

abrirmenuBtn.addEventListener("click", abrirMenu);
cerrarMenuBtn.addEventListener("click", cerrarMenuBtn)