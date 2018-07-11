var width = document.getElementById("myContainer").clientWidth;
var height = document.getElementById("myContainer").clientHeight;
var down = true;
var right = true;

function myMove() {
  var elem = document.getElementById("myAnimation");   
  var x = 0;
  var y = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (x == width - 50)
        right = false;
    else if (y == height - 50)
        down = false;
    else if (x == 0)
        right = true;
    else if (y == 0)
        down = true;
    if (right)
        x++;
    else
        x--;
    if (down)
        y++;
    else
        y--;
    elem.style.top = y + 'px'; 
    elem.style.left = x + 'px'; 
    width = document.getElementById("myContainer").clientWidth;
    height = document.getElementById("myContainer").clientHeight;
  }
}

window.onload = myMove;