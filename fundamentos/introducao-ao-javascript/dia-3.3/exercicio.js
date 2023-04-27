//Crie a função verificaPalindromo

/* function verificaPalindromo(string) {
    let reverso = string.split("").reverse().join("");
       
    if (reverso === string) {
      return true;  
    } else {
        return false;
    }
}

console.log(verificaPalindromo("desenvolvimento")); */

//Crie uma função que retorne o índice do maior valor

/* function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = Number(indice);
      }
    }
    return indiceMaior;
  }
let num = [2, 3, 6, 7, 10, 1]
  console.log(indiceDoMaior(num)); */

  //Crie uma função que retorne o índice do menor valor

/*   function indiceDoMenor(numeros) {
    let indiceDoMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceDoMenor] > numeros[indice]) {
        indiceDoMenor = Number(indice);
      }
    }
    return indiceDoMenor;
  }
let num = [2, 3, 6, 7, 10, 1]
  console.log(indiceDoMenor(num)); */

 // Crie uma função que retorna a maior palavra

 /* function maiorPalavra(palavras) {
    let maior = palavras[0];
    for (let index = 0; index < palavras.length; index+=1) {
        if (maior.length < palavras[index].length) {
            maior = palavras[index];
        }
    }
    return maior;
 }

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); */

//Crie uma função que retorne o número mais frequente

/* function repeticoesPorNumero(array) {
  let num ={};
  for (let index = 0; index < array.length; index+=1) {
    let valor = numeros[index];
    if (num[valor] === undefined)
    num[valor] = 1;
  }else{
    num[valor] += 1;
  }
  return num;
}
function maisRepetido(numeros){
  let num = repeticoesPorNumero(numeros);
  
  let contRepetido = 0;
  let contNumero = 0;
  for (let prop in num) {
    if(contRepetido < num[prop]) {
    contRepetido = num[prop];
    contNumero = Number(prop);
    }
  }
  return contNumero;
}; */

//Crie a função somatório

/* function somatorio(numero) {
  if (numero < 0) return 'ERRO';

  let total = 0;
  for (let index = 1; index <= numero; index += 1) {
    total += index;
  }
  return total;
} */

//Crie uma função que verifica se uma string é o final de outra

function verificaFimPalavra(palavra, fimPalavra) {
  return palavra.endsWith(fimPalavra);
}