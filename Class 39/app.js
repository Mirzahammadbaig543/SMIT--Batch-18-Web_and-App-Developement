function calculator(n1,n2,operate){
    var total;
    if(operate === '+'){
        total= n1+n2;
    }
    else if(operate === '-'){
        total= n1-n2;
    }
    else if(operate === '*'){
        total= n1*n2;
    }
    else if(operate === '/'){
        total= n1/n2;
    }
    else{
        alert('Plz enter right number or operator');
    }
    return total;
};

var num1= +prompt('Enter num1');
var num2= +prompt('Enter num2');
var operator = prompt('Enter operator');

var output = (calculator(num1,num2, operator));

// var heading = document.getElementById('hello');
// // console.log('heading' , heading.nodeValue);
// heading.innerHTML = output;

var heading = document.createElement('h1')
// console.log('heading' , heading);
heading.innerHTML = output;
// console.log('heading' , heading);
document.body.appendChild(heading);

var myName = 'smit';
function scope (){
    var newName = 'Saylani';
    return newName;
}
console.log(scope());