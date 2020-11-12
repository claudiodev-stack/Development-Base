export class Cliente { //Classe cliente - export na frente da classe quer dizer que ela está habilitada para ser utilizada em outros módulos js
    nome; //Atributos de cliente
    _cpf;

    //Construtores da classe utilizando os atributos 
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

    get cpf(){
        this._cpf;
    }
}

export class ContaCorrente {
    static numeroDeContas = 0; //Atributo static reflete as alterações em todos os objetos da classe Conta Corrente, ao invés de utilizar o this chamamos o próprio construtor
    agencia;
    _cliente;
    _saldo = 0;

constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas++;
}

    //Getters e Setters ajudam a encapsular propriedades e faciltar o trabalho de objetos que não podem ser acessados diretamente.
    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor) { //Método criado para sacar um valor 
        if (this._saldo >= valor) { //Palavra chave "this" referencia o saldo da classe
            this._saldo -= valor; //Utilizando o # no inicio do atriuto é definido como privado Proposta em ação - https://github.com/tc39/proposal-class-fields#private-fields
            return valor; // Caso o método não obtenha um retorno ele retornará como "undefined"
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) { //Tipo de dado por valor e por referência, se a troca for feita direta no objeto do método vai impactar diretamente
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        conta.cidade = "Rio de Janeiro"; // exemplo tipo por referência
    }
}