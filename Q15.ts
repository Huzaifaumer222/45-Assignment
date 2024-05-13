const guestList1: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Someone can't make it
console.log(`${guestList1[1]} can't make it to dinner.`);

// Replace the guest who can't make it with Nikola Tesla
guestList1[1] = "Nikola Tesla";

// Send out new invitations
console.log(`Dear ${guestList1[0]},\nYou are cordially invited to dinner at my place.`);
console.log(`Dear ${guestList1[1]},\nYou are cordially invited to dinner at my place.`);
