var pro = document.body;
pro.addEventListener('mousemove',colorchanger);

function colorchanger(e){

    pro.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',100)';
}