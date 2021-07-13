var butn = document.querySelector(".btn");
var latersse  = document.querySelector(".output");
var xhr = new XMLHttpRequest();
xhr.open("GET","https://api.chucknorris.io/jokes/random",true);


butn.addEventListener("click",function(){
    console.log("hey");
    console.log(xhr);
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState ==4){
            console.log(xhr.response);
            var jo = JSON.parse(xhr.response);
             console.log(jo);
             latersse.textContent = jo.value;
             butn.style.display = "none";

        }
        
    }
xhr.send();  
  
})
