var isMember = confirm("Are you a member?");

///////////////////////////////////////////////////////

var feeAmt = "";

// if isMember === true
if (isMember) {
	feeAmt = "$200.00";
} else {
	feeAmt = "$1000.00";
}

console.log("The fee is " + feeAmt);

///////////////////////////////////////////////////////

// Here's how we'd accomplish the same thing using a ternary operator and less code!
var feeInfo = "The fee is " + (isMember ? "$200.00" : "$1000.00");

// what's the fee for me to participate?
console.log(feeInfo);