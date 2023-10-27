const temaOscuro = () => {
    document.querySelector("body").setAttribute
    ("data-bs-theme", "dark");
}

const temaLuz = () => {
    document.querySelector("body").setAttribute
    ("data-bs-theme", "light");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"? temaOscuro() : temaLuz();
}