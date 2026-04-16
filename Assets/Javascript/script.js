//Função para expandir as imagens da galeria
function expandir(imagem){
    document.getElementById("janela").style.display = "block"; //mostra o modal
    document.getElementById("img_expandida").src = imagem.src; //Pega a foto clicada e expande
}

//Função para fechar a foto expandida
function fechar(){
    document.getElementById("janela").style.display = "none"; //Esconde o modal
}

//Função para o menu dropdown da faq

document.querySelectorAll('.faqPergunta').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;

        //para fechar outros abertos, 1 por vez
        document.querySelectorAll('.faqItem').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
        //Altera a classe active no que estiver sendo clicado
        faqItem.classList.toggle('active');
    })
})

//Máscara do telefone e validação 

//Função "máscara" email
function mascaraEmail(input){
    let valor = input.value;

    //Remove espaços em branco e caracteres especiais
    valor = valor.replace(/\s/g, "");
    //Para deixar o que estiver escrito em minúsculo
    valor = valor.toLowerCase();

    input.value = valor;
}

//Função para validar se o email ta certo, exemplo josezinho@informaticas.com.br
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById('formCliente').addEventListener('submit', function(e){
    const tel = document.getElementById('whatsapp').value;
    const email = document.getElementById('email').value;

    //Validação para o número (quantidade de digitos no caso)
    if (tel.length < 11) {
        e.preventDefault();
        alert("Por favor, insira um telefone válido");
    }

    if (email.length > 0 && !validarEmail(email)){
        e.preventDefault();
        alert("O formato do e-mail parece inválido :( , por favor verifique se falta o '@' ou o '.com'");
        return;
    }
})