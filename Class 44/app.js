// finding string

// var str1 = 'The name Subhan'

// for( var i = 0 ; i < str1.length; i++)
//     console.log(str1[i])

// var arr1= ['mohib', 'rehan', 'shehzad']
// console.log(arr1.indexOf('shehzad'))
// console.log(arr1.lastIndexOf('mohib'))

var str = 'The quick Fox jumps on lazy Dogs';

var finding = str.indexOf('F')
console.log(finding)


var arr1= ['mohib', 'rehan', 'shehzad'];

console.log(arr1.indexOf('Fahad')) //jab index me wo cheez nahi hogi to result -1 show hoga

// var text = 'just imagine it was World War II';
// for (var i = 0; i < text.length; i++) {
//    if (text.slice(i, i + 12) === "World War II") {
    
// text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//    }
//  }
//  console.log(text)

//  var text = 'just imagine it was World War II';
//  var change = text.replace('imagine ' , 'image');
//  console.log(change)

var str = 'his car is red also his pant is red and house also red ';
var change = str.replaceAll('red ' , ' blue');
console.log(change);


var arr1= ['mohib', 'rehan', 'shehzad'];

// var chan = arr1.charAt(1);
// console.log(chan)


var str = 'his car is red also his pant is red and house also red ';
console.log(str.charAt (12));

