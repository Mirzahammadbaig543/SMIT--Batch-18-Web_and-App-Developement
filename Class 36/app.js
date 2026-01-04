var weight = 1000;
var time = 10;

// if ( weight > 700 && time < 12){
//     document.write(`<h1> Yes its right </h1>`)
// }
// else {
//     document.write( `Its incorrect`)
// }


// if ( weight > 700 && time > 12){
//     document.write(`<h1> Yes its right </h1>`)
// }
// else {
//     document.write( `Its incorrect`)
// }


// if ( weight > 700 || time > 12){
//     document.write(`<h1> Yes its right </h1>`)
// }
// else {
//     document.write( `Its incorrect`)
// }

//Arrays

// var myData = [];
// document.write(typeof myData)


//primitive data types //

// 1.Number
// 2.strings
// 3.Boolean
// 4.Undefined
// 5.null



// Non Primitive data types 

// 1.Array 
// 2.Object




// var str = ``;
// document.write(typeof str)

// var isAvailable = true;
// document.write(typeof isAvailable)

// var myData = [];
// var myName = ``;
// document.write(Array.isArray(myData))

// var arr1 = [12 , 13 , 15 , 20];
// document.write(arr1)


var arr1 = [12 , 13 , 15 , 20 , "yellow ", "green" , true , undefined];
// document.write(arr1.length)

// document.write(arr1[5] +  " <br>");

// document.write(arr1[7]);
document.write('before ', arr1 + '<br>' )
 
var index2 = 100;

arr1[2] = index2;
document.write( 'after ' , arr1);