const botoes = document.querySelectorAll(".botao")

botoes.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        mudaCor(evento.target.id)
    })
}) 

function mudaCor(cor){
    document.querySelector(".robo-imagem").src="img/" + cor + "/Robotron 2000 - " + cor + ".png";
}
