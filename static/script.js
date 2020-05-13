if ($.cookie('bgcolor') != undefined) {
    $("body").css('background-color', $.cookie('bgcolor'));
    $("#game").css('background-color', $.cookie('gmcolor'));
    $("#obj")[0].src = $.cookie('imsrc')
    $("body").css('color', $.cookie('fncolor'));
}

var width = $("#game").width();
var height = $("#game").height();

var start = $("#obj").position();

//move image around randomly
setInterval(() => {
  var newTop = (Math.random() * height) + (start.top/2);
  var newLeft = (Math.random()* width)
    + (start.left/2);

    // move the object
  $("#obj").offset({
      top: newTop,
      left: newLeft
  });
}, 1000);

$("#obj").click(() => {
  var dat = new XMLHttpRequest();
  dat.open("POST", "/score");
  dat.onreadystatechange = function(){
    if (dat.readyState == 4){
      $("#Score").html("Score: " + dat.response);
    }
  }
  dat.send();
})