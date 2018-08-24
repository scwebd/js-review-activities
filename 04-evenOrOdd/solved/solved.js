function evenOrOdd(number) {
  return "The number " + number + " is " + (number % 2 === 0 ? "even" : "odd") + ".";
}

// Should log "The number 2 is even."
console.log(evenOrOdd(2));
// Should log "The number 17 is odd.""
console.log(evenOrOdd(17));