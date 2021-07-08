var dint = document.querySelectorAll("i");

var kank = document.querySelectorAll(".soln");

for(let x=0;x<dint.length;x++){
    dint[x].addEventListener("click",function(){
        console.log(dint[x]);
        // clearActive();
        // mainEle[x].nextElementSibling.classList.add("active");
       
       
      dint[x].classList.toggle("fas");
      dint[x].classList.toggle("fa-plus-circle");

      dint[x].classList.toggle("fas");
      
        dint[x].classList.toggle("fa-minus-circle");
      
      console.log(dint[x]);
      
       console.log(dint[x].getAttribute("class"));


    if(dint[x].getAttribute("class").includes("fa-minus-circle")){
      kank[x].style.display = "block";
    }
      else if(dint[x].getAttribute("class").includes("fa-plus-circle"))
        kank[x].style.display = "none";

    })
}
 