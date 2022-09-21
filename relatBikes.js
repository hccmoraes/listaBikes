const listaBikes = require('./listaBikes');
const precoBikes = require('./precoBikes');

for (let atual = 0; atual < listaBikes.length; atual++){
    let menor = precoBikes(listaBikes, atual);

    let bikeAtual = listaBikes[atual];
   // console.log(listaBikes[atual])
    let bikeMenorPreco = listaBikes[menor];
    //console.log(listaBikes[menor])

    listaBikes[atual] = bikeMenorPreco
    listaBikes[menor] = bikeAtual
}

console.log(listaBikes)