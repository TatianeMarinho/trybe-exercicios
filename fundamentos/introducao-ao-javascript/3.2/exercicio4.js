//Ordene o array numbers em ordem crescente e imprima seus valores.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers); */

  //Ordene o array numbers em ordem decrescente e imprima seus valores.

/*   for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers); */

  /* Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo: // resultado esperado:
  [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
  */

/*   let arrayMulti = [];

  for (let index = 0; index < numbers.length; index += 1) {
      if (index < (numbers.length -1)) {
        arrayMulti.push(numbers[index]* numbers[index+1]);
      }else {
        arrayMulti.push(numbers[index]*2);
      }
  }
  console.log(arrayMulti); */

  /* Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. */

/* let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
}; */

/* Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: */

/* let x = 5;
let simbolo = " ";

  
for (let index = 1; index <= x; index+=1) {

  for (let sindex = 0; sindex < index; sindex+=1) {
    simbolo += "*";
  }
  simbolo += "\n";
}
console.log(simbolo); */

//Agora, inverta o lado do triângulo.
/* let x = 5;
let simbolo = " ";

  
for (let index = 1; index <= x; index+=1) {

  for (let vindex = 0; vindex < x - index; vindex+=1) {
    simbolo += " ";
  }
  for (let sindex = 0; sindex < index; sindex+=1) {
    simbolo += "*";
  }
  simbolo += "\n";
}
console.log(simbolo); */

//Depois, faça uma pirâmide com n asteriscos de base. 

/* 
let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
}; */

/* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar. Por exemplo: */
/* let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
} */

//Faça um algoritmo que indique se um número definido em uma variável é primo ou não

let n =5;
let divisores = 1;

for (let index = 2; index <= n; index+=1) {
  if( n % index === 0){
    divisores += 1;
  }; 
};
if (divisores === 2) {
    console.log("o número, " + n +"é primo.");
  }else{
    console.log("o número, " + n +"não é primo.")
  };