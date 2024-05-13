function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log("- " + item));
    console.log("Sandwich is ready!");
}

makeSandwich("Cucumber", "Cheese", "Lettuce", "Tomato");
makeSandwich("Chicken", "Swiss cheese", "Avocado");
makeSandwich("Meat", "Mayonnaise");
