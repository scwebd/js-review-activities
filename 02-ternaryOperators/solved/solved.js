var age = 19;
var voteable = (age < 18) ? "too young" : "old enough";

// can we vote?
console.log(age + " is " + voteable + " to vote.");

// can we drink?
console.log(age + " is " + (age < 21 ? "too young" : "old enough") + " to drink alcohol.");