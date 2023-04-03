/* Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string. */

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function novosClientes(nomes) {
    if (typeof nomes === "string") {
        clientesTrybeBank.push(nomes);
        return "Cliente adicionado com sucesso."
    } else {
        return "Erro! Favor inserir um nome válido."
    }
}

console.log(novosClientes("Tatiane"));
console.log(novosClientes(25));

/* Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array. */
function removerClientes(nomes) {
    let clienteEncontrado = false;
    if (typeof nomes === "string") {
        for (let index = 0; index < clientesTrybeBank.length; index+=1) {
            if (nomes === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index,1);
                clienteEncontrado = true;
                return "Cliente excluído com sucesso!"
            }; 
        } ;
        if (clienteEncontrado === false) {
            return "Cliente não encontrado."
        } ;
    } else{
        return "Favor inserir um nome válido."
    };
};
 
console.log(removerClientes('Tatiane'));
console.log(removerClientes('João'));