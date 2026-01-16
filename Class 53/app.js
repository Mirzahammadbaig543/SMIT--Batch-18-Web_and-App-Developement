// var i = 5;
// do{
//     alert(i);
//     i++;
// }while (i <=4);



function submit(){
    
    // var studentArr = [];
    
    var name1 = document.getElementById('name').value

    var phone = document.getElementById('phone').value

    var email = document.getElementById('email').value

    var roll_number = document.getElementById('rollNumber').value  
    // console.log('func')
    // studentArr.push(name1 , phone , email ,roll_number)
    // console.log('studentArr' , studentArr);

    var student = {
        stdName : name1,
        phone : phone,
        email : email,
        roll_number : roll_number,
    };
    // console.log('student' , student);

    var finalData = JSON.stringify(student)

    localStorage.setItem('stdData' , finalData)


}

function getData(){
     var get = localStorage.getItem('stdData')
    //  console.log('get', get)
    var parseValue = JSON.parse(get);
    console.log('Parse Data', parseValue )
    document.write(parseValue.stdName)
    var{stdName , phone ,email , roll_number} = parseValue;
    console.log(stdName)
    console.log(email)
    console.log(phone)
    console.log(roll_number)
}

