var age = 21;

// too young OR old enough
var voteable = (age < 18) ? "too young" : "old enough";

console.log(age + " is " + voteable + " to vote");

console.log(age + " is " + (age < 21 ? "too young" : "old enough") + " to drink")