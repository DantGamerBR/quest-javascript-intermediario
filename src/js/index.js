const camposFomulario = document.querySelectorAll(".caixa-de-texto");
const botaoEnviar = document.getElementById("enviar");

botaoEnviar.addEventListener('click', (enviar) => {
    enviar.preventDefault()

    camposFomulario.forEach((input) => {
        if (input.value) {
            input.classList.add("campo-preenchido")
            input.nextElementSibling.classList.remove("mostrar")
        } else {
            input.classList.remove("campo-preenchido")
            input.classList.add("campo-requerido")
            input.nextElementSibling.classList.add("mostrar")
        }
    })
})
