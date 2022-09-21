const precoBike = require('./listaBikes');


function precoBikes(arrProd, posicaoAtual){
    let menorPreco = posicaoAtual;

    for(let atual = posicaoAtual; atual < arrProd.length; atual++){
    
    if(arrProd[atual].valor < arrProd[menorPreco].valor){
        menorPreco = atual;
    }
}
    return menorPreco;
}

module.exports = precoBikes;

