/* 
    Criando um evento ou escutador de click, sempre que o botão for clicado vai responder com o parâmetro passado na função. 
*/
const botao = document.querySelector("#btn-click");
botao.addEventListener("click", function(){
    alert("Fui clicado.")
    console.log("Evento acionado")
})