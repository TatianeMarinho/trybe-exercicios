/* Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo. */
let student ={};

student.nome = "Tatiane";
console.log(student);

student["email"] = "devtatianemarinho@gmail.com";
console.log(student);

let newKey = "telefone";
let telefone = "92 98615-3697";
student[newKey] = telefone;
console.log(student);

function addPropriedade(objeto, chave, valor){
    objeto[chave]= valor;
}
let prop = "gitHub"; 
let valor = "TatianeMarinho";
addPropriedade(student, prop, valor);
console.log(student);

let prop1 = "Linkedin"; 
let valor1 = "Tatiane Marinho";
addPropriedade(student, prop1, valor1);
console.log(student);