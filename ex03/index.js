let petString = "Liz has a pet cat.";
let petRegex = /|dog|cat|bird|fish/;
let result = petRegex.test(petString);

console.log(result); //true

/*Se eu for usar /bananinha/, eu encontraria essa palavra
caso ela estivesse escrita na minha variável
mas isso me limita a buscar um string por vez
com o operar OR, eu consigo selecionar mais do que uma string
/yes|no|maybe/
*/