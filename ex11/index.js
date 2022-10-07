let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line


console.log(result.length); // 9

/*Regex que tem o símbolo circunflexo ^ (caret), vai ter os valores que
eu não gostaria de retornar, neste caso, eu escolhi /[^aeiou0-9]/ig
onde eu não vou retornar nenhuma vogal ou número, o retorno do valor
vai ser 9*/