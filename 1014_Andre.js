var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X           = parseInt(lines.shift());//CORRETO
var Y           = parseFloat(lines.shift());//PARCIALMENTE CORRETO
//Nessa linha já se pode colocar o "toFixed(1)" não sendo necessário criar outra variável.
//ficaria assim:
//var Y           = parseFloat(lines.shift()).toFixed(1);

var Yformatada = Y.toFixed(1);//Essa variável pode ser removida, já que o que ela propõe o que já foi feito na linha acima.
//var Consumo     = parseFloat(X/Yformatada)//PARCIALMENTE CORRETO
//A lógica está correta, deve-se fazer a divisão das variáveis "X" e "Y" para que o consumo seja calculado, porém o "parseFloat" deve ser usado na entrada de dados.
//ficaria assim:
//var Consumo = X / Y;

console.log(${Consumo.toFixed(3)}Km/l);//QUASE CORRETO
//faltou somente as as aspas simples ou duplas.
//ficaria assim:
//console.log(`${Consumo.toFixed(3)} Km/l`);