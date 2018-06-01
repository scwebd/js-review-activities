function longestWord(sentence) {
    // Use a variable to keep track of the longest word so far.
    var longestWordSoFar = "";
    // Convert the sentence into an array of words, so we can easily iterate over each word.
    var wordArray = sentence.split(" ");
    // Use a variable to keep track of the current word as we loop through each word in the sentence.
    var currentWord;

    // Loop through each of the words.
    for (let i = 0; i < wordArray.length; i++) {
        currentWord = wordArray[i];
        // If the length of the current word is greater than the longest word so far, update the variable containing the longest word.
        if (currentWord.length >= longestWordSoFar.length) {
            longestWordSoFar = currentWord;
        }
    }

    // after we've looked at every word, return the variable containing the longest word.
    return longestWordSoFar;
}

// This should log "splendiferously" once our function is working correctly.
console.log(longestWord("The sentence is preposterously long and inefficient to reliably parse but it is splendiferously spectacularly suitable for surgically vivisecting via whiteboard function!")); 