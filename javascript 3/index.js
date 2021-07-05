setInterval(timeClock,1000);
function timeClock(){
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var Seconds = time.getSeconds();
      var world;
      if(hours>12){
          hours-=12;
      }
      if(hours ==0){
          hours = 12;
      }
      if(hours<12){
        world ="PM";
      } 
      if(hours>12){
          
          world = "AM";
      }


      document.querySelector(".hrs").innerHTML = hours +" :";
      document.querySelector(".mins").innerHTML = minutes +" :";
      document.querySelector(".secs").innerHTML = Seconds+" "+world;
}