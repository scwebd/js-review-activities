var palindromeCheck1 = function(str) {
	if (str == str.split('').reverse().join('')) {
		console.log("it's a palindrome!!!!!");
	} else {
		console.log("it's not a palindrome");
	}
};

var palindromeCheck2 = function(str) {
	// Get the first half of the word
	var first = str.split('')
		.splice(0, str.length / 2)
		.join('');

	// Get the second of the word, and reverse it
	var second = str.split('')
		.slice(Math.ceil(str.length / 2), str.length)
		.reverse()
		.join('');

	// Then console log out whether it is a 
	// What do we call this sort of conditional?
	// console.log("first half:", first, "second half (reversed)!:", second);
	console.log("it's " + (first !== second ? "not " : "") + "a palindrome" + (first === second ? "!!!!!" : ""));
	return first === second;
};

var palindromeCheck3 = function(str) {
	// Palindromes with an odd number of letters eventually recurse on
	// a string of length 1. Palindromes with an even number of letters
	// eventually recurse on a string of length 0.
	if (str.length === 1 || str.length === 0) {
		console.log("it's a palindrome!!!!!");
		return true;
	} else if (str[0] === str[str.length - 1]) {
		return palindromeCheck3(str.slice(1, str.length - 1));
	} else {
		console.log("it's not a palindrome");
		return false;
	}
};

console.log("========================================================================");
console.log("=== palindromeCheck1() =================================================");
console.log("========================================================================");
console.log(" ");

palindromeCheck1("palindrome");
palindromeCheck1("racecar");
palindromeCheck1("donuts");
palindromeCheck1("redivider");

console.log(" ");
console.log("========================================================================");
console.log("=== palindromeCheck2() =================================================");
console.log("========================================================================");
console.log(" ");

palindromeCheck2("palindrome");
palindromeCheck2("racecar");
palindromeCheck2("donuts");
palindromeCheck2("redivider");

console.log(" ");
console.log("========================================================================");
console.log("=== palindromeCheck3() =================================================");
console.log("========================================================================");
console.log(" ");

palindromeCheck3("palindrome");
palindromeCheck3("racecar");
palindromeCheck3("donuts");
palindromeCheck3("redivider");