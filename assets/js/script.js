function fuja() {
    const naoButton = document.getElementById("nao-button");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Defina as coordenadas do quadrado desejado
    const squareX = 100; // Ajuste conforme necessário
    const squareY = 100; // Ajuste conforme necessário
    const squareSize = 300; // Ajuste conforme necessário

    const minX = squareX;
    const minY = squareY;
    const maxX = squareX + squareSize - naoButton.offsetWidth;
    const maxY = squareY + squareSize - naoButton.offsetHeight;

    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    naoButton.style.left = randomX + "px";
    naoButton.style.top = randomY + "px";
}

const naoButton = document.getElementById("nao-button");
naoButton.addEventListener("mouseover", fuja);
// script.js

const simButton = document.querySelector('.sim');

simButton.addEventListener('click', () => {

    window.location.href = 'obrigado.html';
});
