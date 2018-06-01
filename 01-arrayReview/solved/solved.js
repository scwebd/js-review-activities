var animals = ["gerbil", "mermaid", "hyena", "unicorn", "cyclops", "bald eagle", "puma"];

// 3
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

// -1 (that's basically saying 'array member not found', and can be a useful check to determine if a member exists in an array)
console.log(animals.indexOf("bear"));

// 0
console.log(animals.indexOf("gerbil"));


// ---------------------------------------------------------------
// Now, let's modify our array a little bit
// https://alligator.io/js/push-pop-shift-unshift-array-methods/
// ---------------------------------------------------------------


// use .push() to add one or more new animals to the end of the array
animals.push("jackalope", "sugar glider", "emu");
console.log("------------------------------------------------------------------------------------");


// now we'll print out the entire array
console.log("array after push: " + animals);
console.log("------------------------------------------------------------------------------------");


// use .pop() to return the last item in an array (which is also removed from the original array; here we're console.logging it out)
console.log("result of .pop(): " + animals.pop());
console.log("------------------------------------------------------------------------------------");


// let's print out the edited array -- note how the last animal was removed with .pop()
console.log("array after pop: " + animals);
console.log("------------------------------------------------------------------------------------");


// use .shift() to return the first item from an array (which is also removed from the original array)
console.log("result of .shift(): " + animals.shift());
console.log("------------------------------------------------------------------------------------");


// print out the array again, and note how .shift() removed the first animal from our array
console.log("array after shift: " + animals);
console.log("------------------------------------------------------------------------------------");


// use .unshift() to add members to the beginning of the array
animals.unshift("buffalo", "hyena", "albatross");

// print out the whole menagerie of animals one last time!
console.log("array after unshift: " + animals);