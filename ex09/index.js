let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line[

console.log(result.length); //35

/*Como estou pegando as letras de A até Z, eu vou marcar 35 letras encontradas */

/*se eu usar hyphen entre as letras que eu quero buscar, 
eu vou conseguir buscar colocando a-e, que terei o retorno de a até a letra e
*/

/* EXAMPLE
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

retorno vai ser cat, bat e null
 */