let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\D*\d{2})/i; // Change this line
let result = pwRegex.test(sampleWord);

console.log(result);

/* Teste

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
let reste1 = quit.match(quRegex);
let reste = noquit.match(qRegex);

console.log(reste);
console.log(reste1);

quRegex vai usar o lookahead para ver se existe o u na palavra que está sendo
procurada.

qRegex vai usar o lookahead para que o u não esteja na palavra.
 */