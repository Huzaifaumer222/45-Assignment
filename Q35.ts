const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Printing animal names
console.log("Printing animal names:");
for (let animal of animals) {
    console.log(animal);
}

// Printing animal statements
console.log("\nPrinting animal statements:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Additional sentence
console.log("\nAny of these animals would make a great pet!");
