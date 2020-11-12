const tabelas = document.querySelectorAll(".tabela"); /*Retorna uma lista de elementos presentes no documento 
(usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que coincidam com o grupo de seletores especificado. O objeto retornado é uma NodeList.*/
for(let i = 0; i < tabelas.length; i++){
    console.log(tabelas[i]); 
}
