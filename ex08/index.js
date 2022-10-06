let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result.length); //25


/*Colocando /[aeiou]/gi na variável vowelRegex, eu vou conseguir ter o 
retorno de cada vogal que existe no string da variável quoteSample
 */


/* example

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

Neste caso, a variável bgRegex está pegando o valor bag,big e bug,
porque dentro dos brackets, tem as vogais dentro dela para filtrar os valores,
bug vai retornar como null
 */