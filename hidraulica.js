document.addEventListener("DOMContentLoaded", function(){ //carrega o conteúdo do DOM
    let activePage = window.location.pathname.split("/").pop(); //pega o caminho da página atual

    if(activePage === "" || activePage === "index.html"){
        activePage = "index.html";
    }

    const navLinks = document.querySelectorAll('.nav_links a'); //seleciona todos os links da navegação

    navLinks.forEach(
        link => {
            if (link.getAttribute('href') === activePage) { //verifica se o href está na url atual com o método includes - ideal para isso -
                link.querySelector('button').classList.add('active'); // adiciona a classe active ao botão dentro desse link
            } 
            else {
                link.querySelector('button').classList.remove('active'); //garante que os outros não tenham a classe active
            }
        }
    )



if(document.querySelector(".saiba_mais1")){
document.querySelector(".saiba_mais1").addEventListener('click', function(){
    alert('Você clicou no botão Saiba Mais para obter maiores informações!')
});
}

if(document.querySelector(".saiba_mais2")){
document.querySelector('.saiba_mais2').addEventListener('click', function(){
    alert('Você clicou no botão Saiba Mais para obter maiores informações!')
});
}

if(document.querySelector(".saiba_mais3")){
document.querySelector('.saiba_mais3').addEventListener('click', function (){
    alert('Você clicou no botão Saiba Mais para obter maiores informações!')
});
}


const armazenamento = document.querySelector('#form_contato');

if(armazenamento){
    armazenamento.addEventListener('submit', function (event) {
        event.preventDefault();
        const dados = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            mensagem: document.getElementById('area').value
            
        }
        console.log("Dados capturados", dados);
        alert(`Dados capturados ${dados.nome}, ${dados.email}, ${dados.mensagem}`);
        armazenamento.reset();
    });
}




});



