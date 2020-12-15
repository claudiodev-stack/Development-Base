function tratarError(erro){
    //O throw é o identificador para as exceções do cath, para ele pode se passar o erro que deseja informar.
    throw new Error('Erro de operação com o Objeto');
}

function imprimirNomeGrifado(obj){
    //O estado a ser executado ou seja o código que deseja executar...vai tentar realizar esse estado 
    //Exemplo vou fazer uma requisão Ajax 
    try{

        console.log(obj.name.toUpperCase() + "!!!!");
    } 
    // Se uma exceção for lançada no bloco do try (ele entra no cath para o tratamento do erro)
    //Exemplo: Caso a requisição dê algum problema entra no cath ou no exemplo o "name" é diferente de "nome" no objeto  
    catch (e){
        tratarError(e)
    } 
    // Esse estado vai ser executado após o try independente se uma exceção foi lançada no try   
    finally{
        console.log('final')
    }
}

const obj = {nome: "Roberto"};
imprimirNomeGrifado(obj);