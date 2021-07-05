var varsity = document.querySelector(".button");
var mayo = document.querySelector(".output");

var hill = document.querySelector(".starst");
var lykar = document.querySelector(".billst");

varsity.addEventListener("click",function(){
    var hilton = hill.value;
    console.log(hilton);
    var lykarin = lykar.value;
    var toterman = (hilton*lykarin*0.05).toFixed(2);
    mayo.innerHTML= toterman;
});