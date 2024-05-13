let users1: string[] = ["Alice", "Bob", "Charlie", "David", "Admin"];

for (let user of users1) {
    if (user.toLowerCase() === 'admin') {
        console.log(`Hello admin, would you like to see a status report?`);
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
