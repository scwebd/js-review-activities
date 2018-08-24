// Disemvowel without regex:
var vowels = ["a", "e", "i", "o", "u"];

function disemvowel(string) {
    var letterArr = string.split("");
    var consonants = "";

    letterArr.forEach(function(letter) {
        // if the letter is NOT a vowel
        if (vowels.indexOf(letter.toLowerCase()) === -1) {
            consonants+= letter;
        }
    })

    return consonants;
}

function disemvowelRegex(string) {
	// This is what we call a regex, or regular expression. It replaces anything on the left side of the comma
	// with whatever's on the right side, which is an empty string in this case. Note the 'gi'. The 'g' means
	// 'global' and that the regex will return ALL matches (if we hadn't included it, it would return just the 
	// first match) and the 'i' means that the match is case-insensitive... if we hadn't included it, we would
	// have to specify both uppercase and lowercase versions of the letters we wished to target.
	return string.replace(/[aeiou]/gi, '');
}

// FOREACH TESTS
// Should log "Tng Mtnt Nnj Trtls!"
console.log(disemvowel("Teenage Mutant Ninja Turtles!"));
// Should log "Jst s lng s ths sn't gng t dsmbwl m, 'm ky wth t."
console.log(disemvowel("Just so long as this isn't going to disembowel me, I'm okay with it."));
// Should log HLL
console.log(disemvowel("HeLLO"));

console.log("\n=========================\n")

// REGEX TESTS
// Should log "Tng Mtnt Nnj Trtls!"
console.log(disemvowelRegex("Teenage Mutant Ninja Turtles!"));
// Should log "Jst s lng s ths sn't gng t dsmbwl m, 'm ky wth t."
console.log(disemvowelRegex("Just so long as this isn't going to disembowel me, I'm okay with it."));
// Should log HLL
console.log(disemvowelRegex("HeLLO")); 