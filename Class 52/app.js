var dob = new Date(prompt(`write age in this (12, august 1999)format`));
var dobTime = dob.getTime();
console.log('dobTime', dobTime)


var date = new Date();
var dTime = date.getTime()
console.log('dTime',dTime)

var calAge = dTime - dobTime;
var final = Math.floor(calAge / (1000 * 60 * 60 * 24 * 365));
console.log('final' , final)
// get date //
var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
alert("time: " + theHr + ":" + theMin);
/////////////////////xxxxxxxxxxxxxxxxxxxxxxx/////////////////////

////////////////switch statements///////////////////
var userAge = 30;
switch (userAge) {
    case 20:
        document.write('Age is Correct')
        break;
    case 10:
        document.write('Age is 10')
    default:
        document.write('Please enter correct age')
        break;
}

var i = 0;
 while (i <= 3
) {
  alert(i);
  i++;
 }


var i = 1;
 do {
   alert(i);
   i++;
 } while (i <= 4);












