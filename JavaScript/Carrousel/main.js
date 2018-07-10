var image=document.getElementById("image");
var currentPos = 0;
var images = ["green.png","blue.png","red.png"]
var t = 2000;


function volgendefoto() {
    if (++currentPos >= images.length) currentPos = 0;
    image.src = images[currentPos];
}

var intervalId = setInterval(volgendefoto, t);

function faster() {
    if (t > 500)
        t -= 500;
    else t = 100;
    clearInterval(intervalId);
    intervalId = setInterval(volgendefoto, t);
}

function slower() {
    if (t == 100)
        t = 500;
    else if (t < 6000)
        t += 500;
    clearInterval(intervalId);
    intervalId = setInterval(volgendefoto, t);
}