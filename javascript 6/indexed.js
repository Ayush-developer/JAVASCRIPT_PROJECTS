var x  = document.querySelector(".info");

var bunny = document.querySelector("#textered");




document.addEventListener("keydown",function(e){
      let countin = bunny.value.length;
        console.log(countin);
  const maxlent = 200;
      
      if (countin>maxlent){
          bunny.value = bunny.value.substring(0,maxlent-1);
      }
      x.innerHTML = "200 WORDS |"+(maxlent-countin)+" more words !!";
  x.style.color = "#1da1f2";
})