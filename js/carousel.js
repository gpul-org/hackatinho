

var backgroundPosition = 0;
var backgroundList = [
  '../images/background/bus.jpg',
  '../images/background/bicicoruna.jpg',
  '../images/background/tren.jpg',
]

setInterval(function() {
  backgroundPosition = (backgroundPosition + 1) % 3;
  $('header').css('background-image', `url(${backgroundList[backgroundPosition]})`);
}, 8000);
