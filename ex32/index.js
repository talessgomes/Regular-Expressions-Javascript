let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // true
let result = reRegex.test(repeatNum);
let resultMatch = repeatNum.match(reRegex);

console.log(result);
console.log(resultMatch);


/*
 ^ vai ser usado para selecionar somente o valor de \d+, \s vai servir para 
 dar espaço, \1 vai pegar o valor de d e repetir ele, o sinal $ vai encerrar a 
 atividade.
 */