// ================= Q1 =================
var students1 = [];
document.write("Q1: Empty array (Literal)<br><br>");

// ================= Q2 =================
var students2 = new Array();
document.write("Q2: Empty array (Object)<br><br>");

// ================= Q3 =================
var stringsArray = ["Apple", "Banana", "Mango"];
document.write("Q3: Strings Array = " + stringsArray + "<br><br>");

// ================= Q4 =================
var numbersArray = [10, 20, 30, 40];
document.write("Q4: Numbers Array = " + numbersArray + "<br><br>");

// ================= Q5 =================
var booleanArray = [true, false, true];
document.write("Q5: Boolean Array = " + booleanArray + "<br><br>");

// ================= Q6 =================
var mixedArray = ["Ali", 25, true];
document.write("Q6: Mixed Array = " + mixedArray + "<br><br>");

// ================= Q7 =================
var networks = ["Jazz", "Zong", "Telenor", "Ufone"];
document.write("Q7: Mobile Networks = " + networks + "<br><br>");

// ================= Q8 =================
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("Q8: Qualifications:<br>");
for (var i = 0; i < qualifications.length; i++) {
    document.write((i+1) + ") " + qualifications[i] + "<br>");
}
document.write("<br>");

// ================= Q9 =================
var movies = [];
movies.push("Avengers");
movies.push("Jurassic World");
movies.push("Star Wars");
document.write("Q9: Movies = " + movies + "<br>");
document.write("Length = " + movies.length + "<br><br>");

// ================= Q10 =================
var cars = ["Audi", "BMW", "Toyota"];
document.write("Q10:<br>");
document.write("First Index: 0<br>");
document.write("Car at First Index: " + cars[0] + "<br>");
document.write("Last Index: " + (cars.length - 1) + "<br>");
document.write("Car at Last Index: " + cars[cars.length - 1] + "<br><br>");

// ================= Q11 =================
var studentNames = ["Ali", "Ahmed", "Sara"];
var scores = [420, 380, 450];
document.write("Q11:<br>");
for (var i = 0; i < studentNames.length; i++) {
    var percent = (scores[i] / 500) * 100;
    document.write(studentNames[i] + ": " + scores[i] + " (" + percent + "%)<br>");
}
document.write("<br>");

// ================= Q12 =================
var colors = ["Red", "Green", "Blue"];
document.write("Q12 Original Colors: " + colors + "<br>");

colors.unshift(prompt("Add color to beginning:"));
document.write("After Adding at Beginning: " + colors + "<br>");

colors.push(prompt("Add color to end:"));
document.write("After Adding at End: " + colors + "<br>");

colors.unshift("Purple", "Orange");
document.write("After Adding Two More at Beginning: " + colors + "<br>");

colors.shift();
document.write("After Deleting First Color: " + colors + "<br>");

colors.pop();
document.write("After Deleting Last Color: " + colors + "<br>");

var addIndex = +prompt("Index to add color:");
var addColor = prompt("Color name:");
colors.splice(addIndex, 0, addColor);
document.write("After Adding at Index: " + colors + "<br>");

var delIndex = +prompt("Index to delete color:");
var delCount = +prompt("How many colors:");
colors.splice(delIndex, delCount);
document.write("After Deletion: " + colors + "<br><br>");

// ================= Q13 =================
var scoresSort = [320, 230, 480, 120];
scoresSort.sort(function(a, b){return a - b});
document.write("Q13 Sorted Scores: " + scoresSort + "<br><br>");

// ================= Q14 =================
var fruits = ["strawberry", "apple", "orange", "banana"];
fruits.sort();
document.write("Q14 Sorted Fruits: " + fruits + "<br><br>");

// ================= Q15 =================
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
document.write("Q15 Selected Cities: " + selectedCities + "<br><br>");

// ================= Q16 =================
var arr = ["This ", " is ", " my ", " cat"];
var sentence = arr.join("");
document.write("Q16 Sentence: " + sentence + "<br><br>");

// ================= Q17 (FIFO) =================
var fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");
document.write("Q17 FIFO:<br>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br><br>");

// ================= Q18 (LIFO) =================
var lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");
document.write("Q18 LIFO:<br>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br><br>");

// ================= Q19 =================
var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("Q19 Dropdown:<br>");
document.write("<select>");
for (var i = 0; i < phones.length; i++) {
    document.write("<option>" + phones[i] + "</option>");
}
document.write("</select><br><br>");

// ================= Q20 =================
var multiArray = [[], [], []];
document.write("Q20: Empty Multidimensional Array<br><br>");

// ================= Q21 =================
var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
document.write("Q21 Matrix:<br>");
for (var i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(" ") + "<br>");
}
