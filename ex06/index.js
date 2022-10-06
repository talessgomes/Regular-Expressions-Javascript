let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = TwinkleStar.match(starRegex);

console.log(result); //[ 'Twinkle', 'twinkle' ]

/*Se eu usar a flag /gi, eu consigo retornar todas as palavras que são iguais
como eu usei /Twinkle/gi na variável starRegex*/