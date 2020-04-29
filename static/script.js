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