var animals = ["gerbil", "mermaid", "hyena", "unicorn", "cyclops", "bald eagle", "puma"];

// 7
console.log(animals.length);

// hyena
console.log(animals[2]);

// bald eagle
console.log(animals[5]);

// gerbil
console.log(animals[0]);

// undefined
console.log(animals[animals.length]);

// puma
console.log(animals[animals.length - 1]);

// -1
console.log(animals.indexOf("bear"));

// 0
console.log(animals.indexOf("gerbil"));


// ---------------------------------------------------------------
// Now, let's modify our array a little bit
// ---------------------------------------------------------------

console.log(animals);

// Add at least two new animals to the end of the existing array
animals.push("dragon", "wolf");

// Then log out the entire array
console.log(animals);

// Log the last item in the array, *without* specifying the index
console.log(animals[animals.length - 1]);
console.log(animals[8]);
console.log(animals.pop()); // animal  

// Log out the array again -- note the changes
console.log(animals);

// Return the first item in the array, *without* specifying the index
console.log(animals.shift());

// Log out the array again... what's changed?
console.log(animals);

// Add one or more members to the beginning of the array
console.log(animals.unshift("elephant", "monkey"));

// And now print out the whole zoo full of animals one more time!
console.log(animals);