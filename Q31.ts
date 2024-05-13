let users2: string[] = [];

if (users2.length === 0) {
    console.log(`We need to find some users!`);
} else {
    for (let user of users2) {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
