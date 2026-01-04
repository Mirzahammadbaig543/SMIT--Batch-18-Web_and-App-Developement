// Nested Loops 
// print arr1 element with both arr2 elements 

var arr1 = [ 'jazz ' , 'zong ', 'warid'];

var arr2 = [' telenor' , ' ufone']; 


for ( var i = 0 ; i < arr1.length; i++){  //outer
    for ( var j = 0 ; j < arr2.length; j++){  //inner
    // document.write(arr2 [j])
    document.write(arr1[i] + arr2[j] + '<br>')
}
// document.write('<br>')
}

// counting 

for ( var i = 1 ; i <= 10 ; i++){
    document.write(i + '<br>')
}

for (var i = 1 ; i <= 100; i = i + 10){
    for ( var j = i ; j < i + 10 ; j++ ){
    document.write( j )
}
document.write( ' <br>');
}