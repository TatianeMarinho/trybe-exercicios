const validation = (name, age) => {
  if(!name || !age) {
    throw new Error('Todas as informações são necessárias');
  }
};

const validationAge = (age) => {
    if (age < 18) {
        throw new Error('Ops, infelizmente nesse momento voce não pode fazer as aulas');
    }
};

const studentRegister = (name, age) => {
    // seu código aqui
    try {
        validation(name, age);
        validationAge(age);
        return `${name}, seja bem-vindo(a) AuTryber!`
    } catch (error) {
        return error.message;
    }
  };

  console.log(studentRegister("Carlos", 18)); // Fluxo completo
console.log(studentRegister("Carlos", 12)) // Fluxo de exceção
console.log(studentRegister("Renan")) 