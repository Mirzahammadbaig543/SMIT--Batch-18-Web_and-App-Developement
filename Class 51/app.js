//   setInterval


// var inter = setInterval(function () {
//     document.write('tmkc')
// },
//     1000
// );

// clearInterval(inter);


//   setTimeout


// setTimeout(function () {

//     document.write('hello')

// }, 5000)



//////////Stop Watch /////

var milli = 0;
var second = 0;
var minute = 0;
var hour = 0;

var milisecond = document.getElementById('miliseconds');
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hours');

var inter;

function start() {
    inter = setInterval(function () {
        milli++;
        milisecond.innerHTML = milli;
        if (milli>=100) {
            second++;
            seconds.innerHTML = second;
            milli=0;
        }
        if (second>=10) {
            minute++;
            minutes.innerHTML = minute;
            second=0;
        }
        if (minute>=60) {
            hour++;
            hours.innerHTML = hour;
            minute=0;
        }
    },100)
}

// start();

function stop (){
    clearInterval(inter)

}

function reset (){
    milisecond.innerHTML = 0;
    second.innerHTML=0;
    minutes.innerHTML = 0;
    hours.innerHTML =0;
    milli = 0;
    second = 0;
    minute = 0;
    hour = 0;

    clearInterval(inter)
}


////// Date and Time /////

var date = new Date();
var str = date.toString();
var copyDate = str.slice(0,15)
document.write(copyDate)

console.log(typeof str)

