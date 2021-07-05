var number = document.querySelector(".main");

// var btn = document.getElementById("addition");
var button = document.getElementById("subtraction");

var integer = 0;

document.querySelector(".btn").addEventListener("click",function(){
    integer+=1;
  number.innerHTML = integer;
});
document.querySelector(".btn-sub").addEventListener("click",function(){
    integer-=1;
  number.innerHTML = integer;
});