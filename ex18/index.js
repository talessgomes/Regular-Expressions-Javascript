let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/ig; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);


/*Uma forma de ter todo o alfabeto, é usando \w, que vai equivaler
como [A-Za-z0-9_] */

/* TESTE

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); //true
shortHand.test(numbers); //true
longHand.test(varNames); //true
shortHand.test(varNames); //true


 */