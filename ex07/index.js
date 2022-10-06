let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

console.log(result); //true

/*Quando eu usar . no regex, eu consigo pegar qualquer palavra que tenha
dentro da variável que eu pretendo buscar, desde que ela tenha as mesmas letras
iniciais, exemplo /hu./ */