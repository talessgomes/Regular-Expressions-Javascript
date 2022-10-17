let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result); //6

/* O valor \W vai equivalor a mesma coisa que [^A-Za-z0-9_] 
onde todos os caracteres que existem dentro dos colchetes
não vão ser pego*/

/*Todos os espaços em branco vão ser considerados um não alfa numéricos,
contando com o .
por isso que o retorno vai ser 6 */