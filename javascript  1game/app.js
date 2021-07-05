var y = document.querySelector(".containing");
var n = document.querySelector(".start");
var t = document.querySelector(".scorer");
var s = document.querySelector(".muse");
var r = document.querySelector(".rules");

s.addEventListener("click",function(){
  var Audiobe = new Audio("mario.mp3");
  Audiobe.play();
  s.style.display = "none";

})

 var cent = 0;

let player = {score : 0};

n.addEventListener("click",function(){
       n.style.display ="none";
       r.style.display = "none";
       let randT = Math.random()*2000+1000;
       
       setTimeout(getBox,randT);
});


function getBox() {
    let bound = y.getBoundingClientRect();
    console.log(bound);
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = Math.random() * bound.width+50+"px";
    div.style.top =Math.random() * bound.height+300+"px";
    div.style.width = Math.random()*50+60+"px";
    div.style.height = Math.random()*60+50+"px";
    div.style.cursor  = "pointer";
    div.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
  div.style.borderRadius=Math.random()*50+"%"; 
  div.style.borderWidth = "3px";
  div.style.borderStyle = "solid";
  div.style.borderColor = "black";

    div.starT  = Date.now()
    y.appendChild(div);
 
  
  div.addEventListener("click", function(){
        let endT = Date.now();
        var difference = (endT - div.starT)/1000;
        
        cent ++;
        t.innerHTML = "Score :"+cent+"  Total Time:"+difference;
        clearTimeout(div.timer);
        y.removeChild(div);
        getBox();
  })
        div.timer = setTimeout(function(){
                 y.removeChild(div);
                 getBox();
        },1000);

        
  
    



}