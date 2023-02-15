var second_click = false;

function changeColor(newColor, anothercolor){
    var elem = document.getElementById('the-title');
    if (!second_click){
        elem.style.color = newColor;

        second_click = true;
    }
    else{
        elem.style.color = anothercolor;
    } 
}

function feliz(){
    var elem = document.getElementById("bot1");
    elem.style.backgroundColor = 'rgb(221, 242, 84)'
}

function reset(){
    var elem = document.getElementById("bot1");
    elem.style.backgroundColor = 'white'
}

function reboot(){
    var elem = document.getElementById('the-title');
    elem.style.color = 'blue';
    var elem2 = document.getElementById("bot1");
    elem2.style.backgroundColor = 'rgb(221, 242, 84)'

    second_click = false;
}