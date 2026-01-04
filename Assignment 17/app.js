// ==============================
// 1. Add two numbers and show result in browser
// ==============================
var num1 = 8.9;
var num2 = 10;
var sum = num1 + num2;
document.write("<h1>Q1 Result: <br> " + sum + "</h1>");

// ==============================
// 2. Subtraction, Multiplication, Division, Modulus
// ==============================
var numA = 10;
var numB = 3;
document.write("<h1> Q2.Subtraction, Multiplication, Division, Modulus</h1>")
document.write("Subtraction: " + (numA - numB) + "<br>");
document.write("Multiplication: " + (numA * numB) + "<br>");
document.write("Division: " + (numA / numB) + "<br>");
document.write("Modulus: " + (numA % numB) + "<br><br>");

// ==============================
// 3. Math Expression Steps
// ==============================
var value;
document.write("<h1>Q3. Value after variable declaration is: </h1>" + value + "<br>");
value = 3;
document.write("Initial value: " + value + "<br>");
value++;
document.write("Value after increment is: " + value + "<br>");
value += 7;
document.write("Value after addition is: " + value + "<br>");
value--;
document.write("Value after decrement is: " + value + "<br>");
document.write("The remainder is: " + (value % 3) + "<br><br>");

// ==============================
// 4. Movie Tickets
// ==============================
var ticketPrice = 1000;
var totalCost = ticketPrice * 10;
document.write("<h1>Q4. Total cost of buying 10 tickets is: </h1> <br>  " + totalCost + " PKR<br><br>");

// ==============================
// 5. Multiplication Table
// ==============================
var tableNum = 10;
document.write("<h1>Q5.Multiplication Table of " + tableNum + "</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
document.write("<br>");

// ==============================
// 6. Temperature Converter
// ==============================
var celsius = 25;
var fahrenheitConverted = (celsius * 9/5) + 32;
document.write("<h1> The result after conversion </h1>")
document.write(celsius + "°C is " + fahrenheitConverted + "°F<br>");

var fahrenheit = 70;
var celsiusConverted = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsiusConverted + "°C<br><br>");

// ==============================
// 7. Shopping Cart
// ==============================
var price1 = 650;
var price2 = 100;
var qty1 = 3;
var qty2 = 7;
var shipping = 100;
var total = (price1 * qty1) + (price2 * qty2) + shipping;
document.write("<h1>Q7.Shopping Cart</h1>");
document.write("Price of item 01 is : " + price1 +  "<br>" )
document.write("Quantity of item 01 is :" + qty1 +  "<br>" )
document.write("Price of item 02 is : " + price2 +  "<br>" )
document.write("Quantity of item 02 is :" + qty2 +  "<br> <br>" )
document.write("Shipping Charges: " + shipping + "<br> <br>")
document.write("Total cost of your order is: " + total + "<br><br>");

// ==============================
// 8. Marks & Percentage
// ==============================
var totalMarks = 500;
var marksObtained = 410;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h1>Q8.Marks & Percentage</h1>")
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");

// ==============================
// 9. Currency Conversion
// ==============================
var totalRupees = (10 * 104) + (25 * 28);
document.write("<h1>Q9.Currency Conversion</h1><br> ")
document.write("Total currency in PKR: " + totalRupees + "<br><br>");

// ==============================
// 10. Single Expression Arithmetic
// ==============================
var number = 10;
var result = ((number + 5) * 10) / 2;
document.write("<h1>Q10.Arithmetic operators in single expression</h1><br>")
document.write("Result: " + result + "<br><br>");

// ==============================
// 11. Age Calculator
// ==============================
var currentYear = 2025;
var birthYear = 2002;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("<h1>Q11. The Age Calculator</h1>")
document.write("They are either " + age2 + " or " + age1 + " years old<br><br>");

// ==============================
// 12. Geometrizer
// ==============================
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("<h1>Q12. The Geometrizer</h1>")
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br><br>");

// ==============================
// 13. Arithmetic Steps
// ==============================
var n = 10;
document.write("<h1>Q13. Result:</h1><br>")
document.write("The value of n is: " + n + "<br>");
document.write("-------------------------<br>");
document.write("The value of ++n is: " + (++n) + "<br>");
document.write("Now the value of n is: " + n + "<br>");
document.write("The value of n++ is: " + (n++) + "<br>");
document.write("Now the value of n is: " + n + "<br><br>");

// ==============================
// 14. Explanation of a, b, result
// ==============================
var a = 2, b = 1;
var resultExp = --a - --b + ++b + b--;
console.log("a: " + a);
console.log("b: " + b);
console.log("result: " + resultExp);

document.write("<h1>Q14. In Console</h1>")
// ==============================
// 15. Lifetime Supply Calculator
// ==============================
var snack = "Chips";
var age = 20;
var maxAge = 70;
var perDay = 3;
var totalNeeded = (maxAge - age) * 365 * perDay;
document.write("<h1>Q15</h1><br>")
document.write("You will need " + totalNeeded + " " + snack + " to last you until the age of " + maxAge + "<br>");
