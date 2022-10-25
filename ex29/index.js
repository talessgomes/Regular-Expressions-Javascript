let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);


console.log(result);


/*favou?rite/; a interrogação vai dar a ideia
de que a letra U pode ser opcional, ou seja ela pode tanto 
existir na palavra ou não, a palavra pode ser favorite ou favourite*/


/* EXAMPLE

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); //true
rainbowRegex.test(british); //true
 */