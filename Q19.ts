let guestList4: string[] = ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei", "Leonardo da Vinci", "Stephen Hawking"];

// Inform that only two people can be invited for dinner
console.log("Sorry, I can only invite two people for dinner.");

// Remove guests until only two names remain
const removedGuest1: string = guestList4.pop()!;
console.log(`Sorry ${removedGuest1}, I can't invite you to dinner.`);

const removedGuest2: string = guestList.pop()!;
console.log(`Sorry ${removedGuest2}, I can't invite you to dinner.`);

// Print invitation messages to the two people still on the list
console.log(`Dear ${guestList4[0]},\nYou are cordially invited to dinner at my place.`);
console.log(`Dear ${guestList4[1]},\nYou are cordially invited to dinner at my place.`);

// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);
