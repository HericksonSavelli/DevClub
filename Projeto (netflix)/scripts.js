let botaosom = document.querySelector(".botaosom")
let video = document.querySelector(".video")
let botao = document.querySelector(".Link-Infor")
let modal = document.querySelector(".modal")

// ligar som
botaosom.addEventListener("click", ligasom)

function ligasom(){
    video.muted = false
}


botao.addEventListener("click", mostrarmodal)
modal.addEventListener("click", escondermodal)

function mostrarmodal(){
    modal.style.display = "block"
}
function escondermodal(){
    modal.style.display = "none"
}