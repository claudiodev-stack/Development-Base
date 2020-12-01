//Dispara um alerta no navegador
alert("Olá");
//Valor passado para o input 
document.getElementById('nome').value = "Oi";

/* O javaScript sendo chamado na tag <head> ele é executado antes do <body> e no momento que o javaScript interpreta a instrução
ele pode não encontrar o elemento. Gerando um erro dentro do console no navegador. Exemplo, eu crio um input e dentro do main.js eu
atribuo um valor "Oi" a esse input, porém ele retorna o erro "Uncaught TypeError: Cannot set property 'Value' of null at main.js:2"
Quando o javaScript é iniciado no final do body o erro não é mais exibido, porque o javascript foi interpretado após carregar todo o conteúdo html
Para ver o exemplo comentar o <script> debaixo e tirar o comentário do <script> de cima e abrir o console do navegador */