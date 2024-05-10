const inputText = document.querySelectorAll(".caixa-de-texto");
const botaoEnviar = document.getElementById("enviar");
const fraseCampoObrigatorio = document.querySelectorAll(".campo-obrigatorio");

inputText.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("campo-preenchido");
        } else {
            input.classList.remove("campo-preenchido");
        }
    })
});

function verificarCampos() {
    const campos = inputText;
    const frase = fraseCampoObrigatorio;

    const nomeCompleto = campos[0];
    const nomeCompletoAparecer = frase[0];

    if (nomeCompleto.value == "") {
        alert('Preencha seu nome completo, por favor.');
        nomeCompleto.classList.add('campo-requerido');
        nomeCompletoAparecer.style.display = 'block';
    } else {
        nomeCompleto.classList.remove('campo-requerido');
        nomeCompletoAparecer.style.display = 'none';
    }

    const email = campos[1];
    const emailAparecer = frase[1];

    if (email.value == "") {
        alert('Preencha seu E-mail, por favor.');
        email.classList.add('campo-requerido');
        emailAparecer.style.display = 'block';
    } else {
        email.classList.remove('campo-requerido');
        emailAparecer.style.display = 'none';
    }

    const numeroTelefone = campos[2];
    const numeroTelefoneAparecer = frase[2];

    if (numeroTelefone.value == "") {
        alert('Preencha seu numero de telefone com 10 a 11 digitos, por favor.');
        numeroTelefone.classList.add('campo-requerido');
        numeroTelefoneAparecer.style.display = 'block';
    } else {
        numeroTelefone.classList.remove('campo-requerido');
        numeroTelefoneAparecer.style.display = 'none';
    }
    
    const mensagem = campos[3];
    const mensagemAparecer = frase[3];
    
    if (mensagem.value == "") {
        alert('Escreva sua dúvida, por favor.');
        mensagem.classList.add('campo-requerido');
        mensagemAparecer.style.display = 'block';
    } else {
        mensagemAparecer.classList.remove('campo-requerido');
        mensagemAparecer.style.display = 'none';
    }
}