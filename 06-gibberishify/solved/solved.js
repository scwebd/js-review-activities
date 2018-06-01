function gibberishify(str) {
    // Break the provided string into individual characters
    var letters = str.split("");
    // Here's an empty array that we'll use to hold all of the letters we'll use to build the string we'll eventually return
    var result = [];
    for (var i = 0; i < letters.length; i++) {
        // Loop through each character in the initial string, and build out a string including that letter 
        // (capitalized) and one extra lowercased-version of that same letter for each index... 
        // ie (i = 1) = one lower-cased letter, (i=2) = two lower-cased letters, etc.  
        result.push(letters[i].toUpperCase() + letters[i].toLowerCase().repeat(i));
    }
    // Join all of the letters together, separated by " - "
    return result.join(" - ");
}

console.log(gibberishify("Testing"));
console.log(gibberishify("Sarah"));