//Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];

/* Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
 */
let arrayMaior = "";
for (let index = 0; index < array.length; index+=1) {
    if ( array[index].length > arrayMaior.length) {
        arrayMaior = array[index];
    }
    console.log(arrayMaior);
}

let arrayMenor = array[0];

for (let index = 1; index < array.length; index+=1) {
    if (array[index].length < arrayMenor.length) {
        arrayMenor = array[index];
    }
    console.log(arrayMenor);
}