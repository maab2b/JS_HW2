// Task 1:

let userName = prompt("Hello! What is your name?");
let userHowAreYou = prompt(`How are you, ${userName}?`);
let userLunch = prompt(`What did you eat for lunch, ${userName}?`);
let userGoodbye = prompt("I'm a robot and human food doesn't taste good to me. Goodbye!", "Goodbye!");

console.log("Hello! What is your name?");
console.log(userName);
console.log(`How are you, ${userName}?`);
console.log(userHowAreYou);
console.log(`What did you eat for lunch, ${userName}?`);
console.log(userLunch);
console.log("I'm a robot and human food doesn't taste good to me. Goodbye!");
console.log(userGoodbye);


// Task 2:

let firstUserNum = +prompt("Enter any integer, please!");
let secondUserNum = +prompt("Enter second integer greater than the first number, please!");

if (firstUserNum > secondUserNum) {
    alert("Sorry, but the second number is less than or equal to the first number. Please, refresh the page and try again!");
}

for (let i = firstUserNum; i < secondUserNum; i++) {
    if (i % 2 === 0 || i % 5 === 0) {
        console.log(i);
    }
}

