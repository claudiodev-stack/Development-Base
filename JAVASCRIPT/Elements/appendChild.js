/*
Adiciona um nó ao final da lista de filhos de um nó pai especificado. 
Exemplo abaixo: Criei um elemento <td></td>
Se eu somente criasse os elementos <tr></tr> e o <td></td>, o <td> não ficaria dentro do <tr>
Com o appendChild ficou assim
<tr>
    <td></td>
</tr>
Ou seja o tr adotou o td como seu filho e inseriu dentro.
*/
const elementoPai = document.querySelector("tr");
const elementoFilho = document.createElement("td");

elementoPai.appendChild(elementoFilho)
console.log(elementoPai);

