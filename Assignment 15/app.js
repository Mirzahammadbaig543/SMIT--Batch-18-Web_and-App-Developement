// QUESTION 1
// Write a program that takes input a name from user & greet the user.
// ==========================
let userName = prompt("Enter your name:");
alert("Hello " + userName + ", Welcome!");


// ==========================
// QUESTION 2
// Input a number & display multiplication table. Default is 5.
// ==========================
let tableNum = prompt("Enter a number for multiplication table (Default = 5):");
if (tableNum === "" || tableNum === null) {
    tableNum = 5;
}
for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}


// ==========================
// QUESTION 3
// Input a city. If Karachi → "Welcome to city of lights"
// ==========================
let city = prompt("Enter your city:");
if (city.toLowerCase() === "Karachi") {
    alert("Welcome to city of lights");
}


// ==========================
// QUESTION 4
// Input gender. male → Good Morning Sir, female → Good Morning Ma’am
// ==========================
let gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am");
}


// ==========================
// QUESTION 5
// Traffic signal message
// ==========================
let signal = prompt("Enter traffic signal color: red, yellow, green");
if (signal.toLowerCase() === "red") {
    alert("Vehicles must stop");
} else if (signal.toLowerCase() === "yellow") {
    alert("Vehicles should get ready to move");
} else if (signal.toLowerCase() === "green") {
    alert("Vehicles can move now");
}


// ==========================
// QUESTION 6
// Input max age & current age → show “You are welcome”
// ==========================
let maxAge = +prompt("Enter maximum age:");
let currentAge = +prompt("Enter current age:");
if (currentAge <= maxAge) {
    alert("You are welcome");
}


// ==========================
// QUESTION 7
// Input remaining fuel → if < 0.25 → "Please refill"
// ==========================
let fuel = +prompt("Enter remaining fuel in litres:");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


// ==========================
// QUESTION 8
// Run and check output of conditions
// ==========================

// (a)
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// (b)
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// (c)
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// (d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// (e)
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// (f)
if ("car" < "cat") {
    alert("car is smaller than cat");
}


// ==========================
// QUESTION 9
// Take marks of 3 subjects + total marks → compute percentage & grade
// ==========================
let sub1 = +prompt("Enter marks of subject 1:");
let sub2 = +prompt("Enter marks of subject 2:");
let sub3 = +prompt("Enter marks of subject 3:");
let totalMarks = +prompt("Enter total marks:");

let obtainedMarks = sub1 + sub2 + sub3;
let percentage = (obtainedMarks / totalMarks) * 100;

let grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + obtainedMarks);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);
console.log("Remarks: " + remarks);


// ==========================
// QUESTION 10
// Shopping cart → discount if total cost > 2000
// ==========================
let item1 = prompt("Enter name of item 1:");
let item2 = prompt("Enter name of item 2:");
let price1 = +prompt("Enter price of item 1:");
let price2 = +prompt("Enter price of item 2:");
let qty1 = +prompt("Enter quantity of item 1:");
let qty2 = +prompt("Enter quantity of item 2:");
let shipCharges = +prompt("Enter shipping charges:");

let cost1 = price1 * qty1;
let cost2 = price2 * qty2;
let total = cost1 + cost2 + shipCharges;

let finalAmount = total;

if (total > 2000) {
    finalAmount = total - (total * 0.10);
}

console.log("Item 1: " + item1);
console.log("Item 2: " + item2);
console.log("Price 1: " + price1);
console.log("Price 2: " + price2);
console.log("Quantity 1: " + qty1);
console.log("Quantity 2: " + qty2);
console.log("Shipping Charges: " + shipCharges);
console.log("Total Cost: " + total);
console.log("Final Amount After Discount (if any): " + finalAmount);


// ==========================
// QUESTION 11
// Guess game (secret number 1–10)
// ==========================
let secret = 7;  
let guess = +prompt("Guess the secret number (1–10):");

if (guess === secret) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secret) {
    alert("Close enough to the correct answer");
}


// ==========================
// QUESTION 12
// Check divisible by 3
// ==========================
let num12 = +prompt("Enter a number:");
if (num12 % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is NOT divisible by 3");
}


// ==========================
// QUESTION 13
// Input scores of 2 teams → show winner or tie
// ==========================
let teamA = +prompt("Enter total score of Team A:");
let teamB = +prompt("Enter total score of Team B:");

if (teamA > teamB) {
    alert("Team A has won the game!");
} else if (teamB > teamA) {
    alert("Team B has won the game!");
} else {
    alert("Match is a tie!");
}


// ==========================
// QUESTION 14
// Check types of variables: string, number, boolean
// ==========================
let str = "Hello";
let num = 100;
let bool = true;

console.log(typeof str + " → " + str);
console.log(typeof num + " → " + num);
console.log(typeof bool + " → " + bool);


// ==========================
// QUESTION 15
// Check even or odd
// ==========================
let num15 = +prompt("Enter a number:");
if (num15 % 2 === 0) {
    alert("Even Number");
} else {
    alert("Odd Number");
}


// ==========================
// QUESTION 16
// Temperature messages
// ==========================
let temp = +prompt("Enter temperature:");

if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}


// ==========================
// QUESTION 17
// Calculator using if statements: + - * / %
// ==========================
let first = +prompt("Enter first number:");
let second = +prompt("Enter second number:");
let op = prompt("Enter operation (+, -, *, /, %):");

let result;

if (op === "+") {
    result = first + second;
} else if (op === "-") {
    result = first - second;
} else if (op === "*") {
    result = first * second;
} else if (op === "/") {
    result = first / second;
} else if (op === "%") {
    result = first % second;
} else {
    result = "Invalid operation";
}

alert("Result: " + result);


// ==========================
// QUESTION 18
// Input day name → weekday / weekend / holiday
// ==========================
let day = prompt("Enter day name:");

day = day.toLowerCase();

if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    alert("It’s a week day");
} 
else if (day === "saturday") {
    alert("It’s weekend");
} 
else if (day === "sunday") {
    alert("Yay! It’s a holiday");
} 
else {
    alert("Invalid day name");
}


// ==========================
// QUESTION 19
// User score → if > 50 passed, else try again
// ==========================
let score = +prompt("Enter your score:");

if (score > 50) {
    alert("You are passed");
} else {
    alert("Try again!");
}


// ==========================
// QUESTION 20
// Input 2 numbers → find greater or equal
// ==========================
let n1 = +prompt("Enter first number:");
let n2 = +prompt("Enter second number:");

if (n1 > n2) {
    alert("The greater number is " + n1);
} else if (n2 > n1) {
    alert("The greater number is " + n2);
} else {
    alert("Both numbers are equal");
}


// ==========================
// QUESTION 21
// Translator → language code returns "Hello, World"
// ==========================
let lang = prompt("Enter language code (en, es, de):");

lang = lang.toLowerCase();
let message;

if (lang === "es") {
    message = "Hola, Mundo";
} else if (lang === "de") {
    message = "Hallo, Welt";
} else {
    message = "Hello, World"; // default English
}

alert(message);


// ==========================
// QUESTION 22
// Input number → positive or negative
// ==========================
let num22 = +prompt("Enter a number:");

if (num22 > 0) {
    alert("Positive Number");
} else if (num22 < 0) {
    alert("Negative Number");
} else {
    alert("Number is Zero");
}


// ==========================
// QUESTION 23
// Pluralizer: input noun + number → e.g. "5 cats"
// ==========================
let noun = prompt("Enter a noun:");
let number = +prompt("Enter a number:");

let plural = noun;

if (number !== 1) {
    plural = noun + "s";
}

alert(number + " " + plural);
