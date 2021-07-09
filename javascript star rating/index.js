const stars = document.querySelectorAll(".star");
        const output = document.querySelector(".output");
        const tinka = document.querySelector(".posting");
        const vartana = document.querySelector(".review-us");
        for (let x = 0; x < stars.length; x++) {
            stars[x].starValue = (x + 1);
            ["mouseover", "mouseout", "click"].forEach(function (e) {
                stars[x].addEventListener(e, starRate);
            })
        }
 
        function starRate(e) {
            let t = e.type;
            let starValue = this.starValue;
            if (t === "click") {
                if (starValue==1) {
                    output.style.display ="block";
                    output.style.width = "200px";
                    output.style.marginLeft = "625px";
                    output.style.padding = "25px";
                    output.style.fontSize = "30px";
                    output.style.borderRadius = "10px";
                    output.innerHTML = "Not So Good !! <i class='fas fa-tired'></i>";
                    output.style.backgroundColor ="black";
                    output.style.color ="white";
                    
                }
                else if( starValue ==2){
                    output.style.display ="block";
                    output.style.width = "200px";
                    output.style.marginLeft = "625px";
                    output.style.padding = "25px";
                    output.style.fontSize = "30px";
                    output.style.borderRadius = "10px";
                    output.innerHTML = "Okayish Good !! <i class='fas fa-grimace'></i>";
                    output.style.backgroundColor ="black";
                    output.style.color ="white";
                }
                else if( starValue ==3){
                    output.style.display ="block";
                    output.style.width = "200px";
                    output.style.marginLeft = "625px";
                    output.style.padding = "25px";
                    output.style.fontSize = "30px";
                    output.style.borderRadius = "10px";
                    output.innerHTML = "Pretty Good !! <i class='fas fa-laugh-beam'></i>";
                    output.style.backgroundColor ="black";
                    output.style.color ="white";
                }
                else if( starValue ==4){
                    output.style.display ="block";
                    output.style.width = "200px";
                    output.style.marginLeft = "625px";
                    output.style.padding = "25px";
                    output.style.fontSize = "30px";
                    output.style.borderRadius = "10px";
                    output.innerHTML = "Enjoyed a Lot !! <i class='fas fa-kiss-wink-heart'></i>";
                    output.style.backgroundColor ="black";
                    output.style.color ="white";
                }
                else if( starValue ==5){
                    output.style.display ="block";
                    output.style.width = "200px";
                    output.style.marginLeft = "625px";
                    output.style.padding = "25px";
                    output.style.fontSize = "30px";
                    output.style.borderRadius = "10px";
                    output.innerHTML = "It is Sooo Good !! <i class='fas fa-grin-hearts'></i>";
                    output.style.backgroundColor ="black";
                    output.style.color ="white";
                }
            }
            
            stars.forEach(function (ele, ind) {
                if (t === "click") {
                    if (ind < starValue) {
                        ele.classList.add("orange");
                    }
                    else {
                        ele.classList.remove("orange");
                    }
                }
                if (t === "mouseover") {
                    if (ind < starValue) {
                        ele.classList.add("yellow");
                    }
                    else {
                        ele.classList.remove("yellow");
                    }
                }
                if (t === "mouseout") {
                    ele.classList.remove("yellow");
                }
            })
        }



        tinka.addEventListener("click",fardi);

        function fardi() {
               tinka.innerHTML = "Posted <i class='fas fa-check-circle'></i> ";
               vartana.value = "";
               
        }



