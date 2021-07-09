

var frank = document.querySelector("Enter");
var niks = document.querySelector(".PresstoAdd");
var klaus = document.querySelector(".showscreen");



const myList = [ " milk","dips cheese", "headphones","phone girlfriend", "practice coding"];

niks.addEventListener("click",function(){
    if(frank.value){
        myList.push(frank.value);
    }
    build();
});

window.onload = build;



function build(){
  klaus.innerHTML ="<h2>The TODO APP</h2>";

    var table = document.createElement("table");
    for (let v = 0; v<myList.length;v++){
        var erand = document.createElement("tr");
        erand.ind = v;
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        cell1.innerHTML = myList[v];
        var spa1 = document.createElement("span");
        spa1.innerHTML = "Delete";
      spa1.addEventListener("click", function(){
            myList.splice(v,1);
        console.log("Press");
        build();
        });
      
      
       
      
    
        
       
      
      
        
        erand.appendChild(cell1);
        table.appendChild(erand);
      
      
          
         cell2.appendChild(spa1);
        
      
     
      

        erand.appendChild(cell2);
       table.appendChild(erand);
      
      
      
             



    }
    console.log(table);
  
      klaus.appendChild(table);
      klaus.style.marginRight = "350px";
  
}
