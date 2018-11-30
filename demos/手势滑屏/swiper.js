var intervalTime = 200;
var intervalDistance = 100;
var currentIndex = 0;
var drag = false;
var pageY = 0;
var distanceY = 0;
var startTime = 0;

var swiper = document.getElementById('swiper');
swiper.addEventListener('touchstart', function(event){
  drag = swiper;
  pageY = event.touches[0].pageY;
  startTime = new Date();
  console.log('touchstart');
});

swiper.addEventListener('touchmove', function(event){
  if (drag) {
    distanceY = event.touches[0].pageY - pageY;
  }
});

swiper.addEventListener('touchend', function(event){
  var interval = new Date() - startTime;
  var asbDistance = Math.abs(distanceY);
  drag = false;
  if (interval > intervalTime) {

  }
  if (distanceY > asbDistance) {
    swiper.style.transform = '';
  } 
  console.log('touchend', interval);
});

