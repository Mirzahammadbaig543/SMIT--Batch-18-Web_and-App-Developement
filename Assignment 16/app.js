// =========================================== //
//                CALCULATOR                   //
// =========================================== //

let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");


let operator = prompt("Enter the operator which you want to perform (+, -, *, /):");

let result;

if (operator === "+") {
    result = num1 + num2;
} 

else if (operator === "-") {

    result = num1 - num2;
} 
else if (operator === "*") {
    result = num1 * num2;
}

else if (operator === "/") {
    result = num1 / num2;
}

else {
    result = "Invalid operator!";
}
alert("Result: " + result);
