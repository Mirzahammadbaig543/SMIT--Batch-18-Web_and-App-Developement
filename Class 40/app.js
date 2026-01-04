// for loop

// for (var i = 0; i <= 10;i++){
//     document.write(i + 'hello' + '<br>');
// }

// for (i = 10 ; i >= 0 ; i-- ){
//     document.write(i + 'hello' + '<br>');   
// }

// var arr = [ 'civic ', 'aqua ', 'sonata ', 'v8 ', 'sportage'];

// for (var i =0 ; i <= arr.length ; i++){

//     document.write(arr[i] + '<br');

var userInput = +prompt('Enter the Number')
var userLength = +prompt('Enter the Length')

for (var i = 1; i <=userLength; i++){
    if(userInput && userLength >= 1){
    document.write(userInput + 'X ' + i +  '=' + userInput*i + '<br>');}
    else {
        alert('enter valid number');
    }
}

