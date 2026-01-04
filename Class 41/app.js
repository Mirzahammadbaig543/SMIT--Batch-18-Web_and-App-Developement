var cities = [ 'Karachi ', 'Islamabad ', 'Lahore ' , ' Multan ' , ' Murree' , ' Swat ']; 

var userInput = prompt (' Enter city name ');
var isValid = false;

for ( var i = 0 ; i < cities.length; i++){
    // document.write(cities[i]);

     if(userInput == cities[i]){
        alert('you are eligible');
        isValid = true;
        break;
    }
    // else{
    //     alert('you are not eligible')
    //     isValid = false;
    // }
    // else {
    //     alert('Not Eligible');
    //     isValid =false;
    // }
};
if (userInput  != cities[i] ){
    alert('You are not eligible')
    isValid= false;
}
// if(userInput.toLowerCase() !== cities[i].toLowerCase()){
//     isValid = false;
//     alert('you are not eligible')
// }
console.log('isValid', isValid)