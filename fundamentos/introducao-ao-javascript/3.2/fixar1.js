
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Percorra o array imprimindo todos os valores contidos nele com a função console.log()
//console.log(numbres);


/* 2-Some todos os valores contidos no array e imprima o resultado.


for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index];
} 
console.log(soma);*/

// 3-Calcule e imprima a média aritmética dos valores contidos no array.
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index];
}
let media = soma / numbers.length;
console.log(media) */

/* 4-A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

let soma = 0;

for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index];
}

let media = soma / numbers.length;

if (media < 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}
 */

/* 5- Utilizando for, descubra o maior valor contido no array e imprima-o.

let numberMax = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > numberMax) {
    numberMax = numbers[index];
  }
}

console.log(numberMax); */

/* 6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let resultado = 0;

for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] % 2 !== 0 )  {
        resultado += 1;        
    }
}
if (resultado === 0 ) {
    console.log("Nenhum valor ímpar encontrado.");
} else {
    console.log(resultado);
} */

/* 7- Utilizando for, descubra o menor valor contido no array e imprima-o.
let numberMin = numbers[0];
for (let index = 1; index < numbers.length; index+=1) {
    if (numbers[index] < numberMin) {
        numberMin = numbers[index]
    }   
}
console.log(numberMin); */

//8- Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
let vinteCinco = []

for (let index = 1; index <= 25; index+=1) {
    vinteCinco.push(index);
}
console.log(vinteCinco);

// 9- Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.*/
 let divi = [];

 for (let index = 0; index < vinteCinco.length; index+=1) {
    console.log(index/2);
    
 }