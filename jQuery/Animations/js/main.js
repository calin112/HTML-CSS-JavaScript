//Rotate Y Axis
$(document).ready(function() {
$('.box_holder').click(function() {
    $(this).toggleClass('show_info')
  });
});

//Big Small
$(document).ready(function() {
  $('#btn1').click(function() {
    if ($('#box').width() == 100) {
      $('#box').animate({
       width: "300px",
       height: "300px",
        }, 1500 );
      }
      else if ($('#box').width() == 300) {
        $( '#box' ).animate({
          width: '100px',
          height: '100px',
        }, 1500 );
      }
  });
});

//Move in circles
var t = 0;

function moveit() {
    t += 0.05;

    var r = 100;
    var xcenter = 150;
    var ycenter = 1000;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));
    $('#friends').animate({
        top: newTop,
        left: newLeft,
    }, 1, function() {
        moveit();
    });
}

$(document).ready(function() {
    moveit();
});

$(document).ready(function(){
    $("#btn2").click(function(){
        $("#thanos").fadeOut('slow');
    });
});
