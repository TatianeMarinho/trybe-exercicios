const corretas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostaEstudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compara = (corResp, respEstudante) => {
    if (corResp === respEstudante) {
        return 1;
    } else if (respEstudante === 'N.A') {
        return 0;
      } else
        return -0.5;
};

const contandoPontos = (corResp, respEstudante, acoes) => {
    let pontos = 0;
    for (let i = 0; i < corResp.length; i += 1) {
        const acaoRetorna = acoes(corResp[i], respEstudante[i]);
        pontos += acaoRetorna;
    }
    return `Resultado final: ${pontos} pontos`;
};
console.log(contandoPontos(corretas, respostaEstudante, compara));
