// ============================
// Chapter 04 - Variable Names: Legal and Illegal
// ============================

// Q1: Three variables declared in one statement
let userResponse = "Yes", responseTime = 120, userStatus = "Active";
document.write("<b>Q1:</b> Three variables declared in one statement: userResponse, responseTime, userStatus<br>");
document.write("Values: " + userResponse + ", " + responseTime + ", " + userStatus + "<br><br>");

// Q2: Five legal variable names declared
let userName, myAge, $salary, _count, cityName;
document.write("<b>Q2:</b> Five legal variable names declared: userName, myAge, $salary, _count, cityName<br><br>");

// Q3: Five illegal variable names written in comments
// let 1stName;     // Cannot start with number
// let my-name;     // Hyphen not allowed
// let alert;       // Reserved keyword
// let user name;   // Space not allowed
// let function;    // Reserved keyword
document.write("<b>Q3:</b> Five illegal variable names (shown in comments): 1stName, my-name, alert, user name, function<br><br>");

// Q4: Rules for naming JavaScript variables
document.write("<h3>Q4: Rules for naming JS variables</h3>");
document.write("1. Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable<br>");
document.write("2. Variables must begin with a letter, $ or _. For example: _name or $name<br>");
document.write("3. Variable names are case sensitive.<br>");
document.write("4. Variable names should not be JS reserved keywords.<br>");
document.write("5. Use camelCase convention for readability. Examples: userResponse, userResponseTime, userResponseTimeLimit, response<br>");
document.write("6. Make variable names descriptive for clarity. Example: bestSupportingActressInADramaOrComedy (may be long but clear)<br>");
