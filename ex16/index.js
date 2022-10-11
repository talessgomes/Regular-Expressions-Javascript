let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log(result); //true

/*Como ^cal não está em brackets, ele vai selecionar somente a primeira palavra Cal e o resto não vai ser
selecionado */


/*
                 EXAMPLE

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
const resultT = firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
let resultF = firstRegex.test(notFirst);

console.log(resultT); //true
console.log(resultF); //false
 */
