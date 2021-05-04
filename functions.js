// Testing the functions 
add7(7);
multiply(5, 2);
lastLetter("abcd");
capitalize("HEEEY how aRe you");
capitalize("nO, it's Not neEded")


function add7(number) {
    console.log(number + 7);
}

function multiply(number1, number2) {
    console.log(number1 * number2) ;
}

function capitalize(string) {
    let firstChar = string[0].toUpperCase();
    let restStr = string.substring(1, string.length).toLowerCase();
    console.log(firstChar + restStr);
    
}

function lastLetter(string) {
    console.log(string.slice(-1));
}
