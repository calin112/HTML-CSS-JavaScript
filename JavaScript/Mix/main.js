

//Carrousel
var image=document.getElementById("image");
var currentPos = 0;
var images = ["green.png","blue.png","red.png"]
var t = 2000;

//Clock
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function volgendefoto() {
    if (++currentPos >= images.length) currentPos = 0;
    image.src = images[currentPos];
}

var intervalId = setInterval(volgendefoto, t);

//Input text
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = "Hola " + x;
}