while (true) {
    // Get age and convert it to a Number (prompt always returns a String)
    var age = Number(prompt("What is your age?"));
    if (age < 0) {
        console.log("Error!");
    }
    else if (age === 21) {
        console.log("happy 21st birthday!!")
    }
    else if (age%2 === 1) {
        console.log("your age is odd!")
    }
    else if (age % Math.sqrt(age) === 0) {
        console.log("perfect squre!")
    }
    else {
        console.log("Non of above")
    }
}

