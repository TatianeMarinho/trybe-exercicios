/*Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.*/

let opcao1 = 3;
let opcao2 = 9;

if (opcao1 > opcao2) {
    console.log(opcao1 + " é maior que " + opcao2);
} else {
    console.log("O número é menor!");
}

/*Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.*/

let opcao3 = 6;

if (opcao1 > opcao2 && opcao1 > opcao3) {
    console.log(opcao1 + " é o maior.");
} if (opcao2 > opcao3 && opcao2 > opcao1) {
    console.log("a segunda opção é maior.");
} else {
    console.log("A terceira opção é a maior.");
}

/*Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.*/

let param = "positivo" ; 

if (param == "positivo") {
    console.log("positive");
} else if (param == "negativo") {
    console.log("negative");
}else {
    console.log("zero")
};