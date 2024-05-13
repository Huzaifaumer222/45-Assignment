let guestList2: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Someone can't make it
console.log(`${guestList2[1]} can't make it to dinner.`);

// Replace the guest who can't make it with Nikola Tesla
guestList2[1] = "Nikola Tesla";

// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
guestList2.unshift("Isaac Newton");

// Add one new guest to the middle of the array
guestList2.splice(2, 0, "Galileo Galilei");

// Use push() to add one new guest to the end of the list
guestList2.push("Stephen Hawking");

// Print a new set of invitation messages
guestList2.forEach(guest => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place.`);
});
