let guestList3: string[] = ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei", "Leonardo da Vinci", "Stephen Hawking"];

// Inform that only two people can be invited for dinner
console.log("Sorry, I can only invite two people for dinner.");

// Remove guests until only two names remain
while (guestList3.length > 2) {
    const removedGuest: string = guestList.pop()!;
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print invitation messages to the two people still on the list
guestList3.forEach(guest => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place.`);
});

// Remove the last two names from the list
guestList3.pop();
guestList3.pop();

// Print the list to verify it's empty
console.log("Updated guest list:", guestList);
