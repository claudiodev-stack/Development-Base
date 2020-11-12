/*
Adiciona ou remove o elemento javascript ao elemento ou tag do HTML.
Para saber mais métodos - https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
*/

const classeListCurso = document.querySelector("#curso");
/*adiciona a classe ao elemento HTML com o ID curso.
PS: Criei a classe no style.css e fiz um estilo nela, o elemento já reconheceu direto pelo js. 
*/
classeListCurso.classList.add("classeList");

const classeListIdioma = document.querySelector("#idioma");
classeListIdioma.classList.add("classeList");
classeListIdioma.remove("classeList")

const classeListProfissao = document.querySelector("#profissao");
classeListProfissao.classList.add("classeList");
