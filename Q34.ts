const pizzas: string[] = ["Pepperoni", "Fajita", "Supreme"];

// Printing pizza names
console.log("Printing pizza names:");
for (let pizza of pizzas) {
    console.log(pizza);
}

// Printing pizza statements
console.log("\nPrinting pizza statements:");
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence
console.log("\nI really love pizza!");
