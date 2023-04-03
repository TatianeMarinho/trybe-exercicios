/* Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

Adicione um valor ao saldo.
Subtraia um valor do saldo.
Multiplique o valor do saldo por uma taxa.
Divida o valor do saldo. */
let saldo = 100;


function deposito(valor) {
    return saldo + valor;
}
deposito(1000);

console.log(deposito(1000));

function saque(valor) {
    return saldo - valor;
}

saque(50);
console.log(saque(50));

function investimento(valor) {
    return saldo * valor;
}

investimento(3);
console.log(investimento(3));

function pix(valor) {
    return saldo / valor;
}

pix(3);
console.log(pix(3));

