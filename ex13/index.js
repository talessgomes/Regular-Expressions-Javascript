// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

console.log(result);

/* [ 'Aaaaaaaaaaaaaaaa',
  index: 0,
  input: 'Aaaaaaaaaaaaaaaarrrgh!',
  groups: undefined ] */

/*

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
// soccerWord.match(goRegex); //["goooooooo"]
// gPhrase.match(goRegex); ["g"]
// oPhrase.match(goRegex); null

// Esse exercício não será necessário usar flag
//Com o A e o a, eu vou conseguir pegar os valores maiúsculos e minúsculos