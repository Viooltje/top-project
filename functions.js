add7(7);
multiply(5, 2);
lastLetter("abcd");
capitalize("HEEEY how aRe you");


function add7(number) {
    console.log(number + 7);
}

function multiply(number1, number2) {
    console.log(number1 * number2) ;
}

function capitalize(string) {
    let newstr = "";
    for (var i = 0; i < string.length; i++) {
        if (i = 0) {
            newstr += string[i].toUpperCase;
        } else {
            newstr += string[i].toLowerCase;
        }
        console.log(newstr);
    }
    
}

function lastLetter(string) {
    console.log(string.slice(-1));
}
