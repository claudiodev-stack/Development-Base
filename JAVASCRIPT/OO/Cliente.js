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
