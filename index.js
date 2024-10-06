function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = 'AM'
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h +":" + m + ":" + s + "" + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();

let result= document.getElementById("inputtext");
let calculate=(number)=>{
    result.value+=number;
}

let Result=() =>{
    try{
result.value=eval(result.value)
    }
    catch(err){
        alert("enter a valid input")
    }
}

function cal(){
    result.value = "0"
}

function del(){
    result.value=result.value.slice(0,-1);
}

var swiper = new swiper(".swiper", {
    grabCurse: 500,
    effect: "slide",
    loop: true,
    Sousewheel: {
        invert: false,
        sensitivity: 1,
    },
});

document.querySelector("boby > div.cs_moving_wrap.background-filled.text-uppercase.text-white.d-flex.align-items-center")
// let result=document.getElementById("inputtext");

// let calculate=(number)=>{
//     result.value+=number; 
// }

// let Result=() =>{
//     try{
// result.value=eval(result.value)
//     }
//     catch(err){
//         alert("enter a valid input");
//     }
// }

// function cal(){
//     result.value= "0"
// }

// function del(){
//         result.value=result.value.slice(0,-1);
// }


// var swiper = new swiper(".swiper", {
//     grabCurse: true, 
//     speed: 500,
//     effect: "slide",
//     loop: true,
//     Sousewheel: {
//         invert: false,
//         sensitivity: 1,
//     },
// });


// document.querySelector("body > div.cs_moving_wrap.background-filled.text-uppercase.text-white.d-flex.align-items-center")