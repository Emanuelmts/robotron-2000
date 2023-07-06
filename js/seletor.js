

const imagem = document.getElementById("robo")

function mudaCor(pic) {
    pic.setAttribute("src", "../img/Robotron2000-Vermelho/Robotron 2000 - Vermelho.png")
}

document.getElementById("robotron__cor-vermelho").addEventListener("click", () => {
    mudaCor(imagem)
})