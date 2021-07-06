var pike  = document.querySelector(".clicker");
var tren = document.querySelector(".closeiter");
var zing = document.querySelector(".modal");

pike.addEventListener("click",function(){
        zing.classList.add("regexen");
});

tren.addEventListener("click",function(){
    zing.classList.remove("regexen");
})