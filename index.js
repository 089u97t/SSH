let result=document.getElementById("inputtext");

let calculate=(number)=>{
    result.value+=number; 
}

let Result=() =>{
    try{
result.value=eval(result.value)
    }
    catch(err){
        alert("enter a valid input");
    }
}

function cal(){
    result.value= "0"
}

function del(){
        result.value=result.value.slice(0,-1);
}


var swiper = new swiper(".swiper", {
    grabCurse: true, 
    speed: 500,
    effect: "slide",
    loop: true,
    Sousewheel: {
        invert: false,
        sensitivity: 1,
    },
});


document.querySelector("body > div.cs_moving_wrap.background-filled.text-uppercase.text-white.d-flex.align-items-center")