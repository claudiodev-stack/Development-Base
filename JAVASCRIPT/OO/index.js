//OBS:orientacao_objetos.js está atrelado a Classe.js

import {Cliente} from "./Cliente.js" //Importar a classe do módulo que ela está 
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("João", 12056292735); //Criando uma instancia da classe cliente ou conta corrente utilizando o construtor
const cliente2 = new Cliente("Sergio", 320948234224);
const contacorrente1 = new ContaCorrente(1563, cliente1);
contacorrente1.cliente = cliente1; 
const contacorrente2 = new ContaCorrente(6589, cliente2);
contacorrente2.cliente = cliente2 // A instancia é um espaço de memória que recebe um valor, no exemplo eu tenho uma Conta Corrente que recebe um novo Cliente. Não necessariamente uma intancia de Cliente só recebe um cliente.

//contacorrente1._saldo = 10000; Exibir o método como privado vai gerar um erro de Private Field    
contacorrente1.depositar(500);
const valorSacado = contacorrente1.sacar(50);//Chamando a instancia do objeto junto com o método de sacar.
contacorrente1.transferir(400, contacorrente2);

console.log(contacorrente1);
console.log(contacorrente2);
console.log("Número de Contas Correntes existentes:",ContaCorrente.numeroDeContas);
