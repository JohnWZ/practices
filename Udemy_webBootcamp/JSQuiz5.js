function factorial(num) {
    var result = 1;
    for(var i=num; i>0; i--) {
        result *= i;
    }
    return result;
}

// var num = Number(prompt("Input a number: "));
// console.log(factorial(num));


function kebabToSnake(str) {
    // replace all '-' to '_'
    // str.replace(/oldChar/g , "newChar")
    var newStr = str.replace(/-/g , "_");
    return newStr;
}