let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

console.log(result);

/*  EXAMPLE

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); //false
multipleHA.test(A3); // true
multipleHA.test(A100); //false

*/

/*o número que tem dentro das chaves,
 é o que vai falar quantas letras iguais vai ter na string */