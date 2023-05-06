const numberCheck = (myNumber, number) => myNumber === number;


const sortear = (myNumber, callback) => {
    const number = Math.floor(Math.random() *5) + 1;

    return callback(myNumber,number) ? 'Parabéns você ganhou!' : 'Não foi desta vez. Tente de novo!';
};

console.log(sortear(4,numberCheck));