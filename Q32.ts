let currentUsers: string[] = ["Umer", "Haider", "hunain", "Charlie", "Admin"];
let newUsers: string[] = ["John", "Sarah", "Emma", "Mike", "admin"];

for (let newUser of newUsers) {
    let isUnique: boolean = true;
    for (let currentUser of currentUsers) {
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different username.`);
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
}
