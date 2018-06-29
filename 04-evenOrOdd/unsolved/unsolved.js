// Write a function that takes in an integer.  The function should then return either “Even” or 
// “Odd” depending on whether the integer is even or odd. Try using a ternary operator for this one!


function evenOrOdd(number) {


    // if (number % 2 == 0) {
    //     console.log("Even");
    // } else if (number % 2 == 1) {
    //     console.log("Odd");
    // } else {
    //     console.log("NOT A NUMBER");
    // }

    console.log((number % 2 == 0) ? "Even" : (number % 2 == 1) ? "Odd" : "Not a number");
}

evenOrOdd(4); // Even!
evenOrOdd(3); // Odd!
evenOrOdd("meow");