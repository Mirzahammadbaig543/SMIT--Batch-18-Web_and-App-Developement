var input = document.getElementById('inp')
function calculate(e){
    console.log(e);

    var val = input.value += e;

}

function equal(){
    input.value = eval(input.value);
}
function cl (){
    console.log('result cleared')
    input.value = ''

}


