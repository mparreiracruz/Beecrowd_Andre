var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Entrada = parseInt(lines.shift());//CORRRETO

var HORAS = parseInt(Entrada/3600);//No processamento não é necessário nesse momento usar o "parseInt"
var SOBRA = parseInt(Entrada–(HORAS*3600));//No processamento não é necessário nesse momento usar o "parseInt"

if(SOBRA<60) {
              var MINUTOS = 0;
              var SEGUNDOS = SOBRA; 
              }  else {var MINUTOS =  parseInt(SOBRA/30);
                       var SEGUNDOS = (SOBRA–(MINUTOS * 30));
              } 

console.log(${HORAS}:${MINUTOS}:${SEGUNDOS});