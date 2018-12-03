var intervalTime = 200;
var intervalDistance = 80;
var drag = false;
var pageY = 0;
var distanceY = 0;
var startTime = 0;
var swiper = document.getElementById('swiper');
var currentIndex = 0;
var parentList = swiper.children;
swiper.addEventListener('touchstart', function(event){
  drag = swiper;
  pageY = event.touches[0].pageY;
  startTime = new Date();
  for (var i = 0; i < parentList.length; i++) {
    if (parentList[i] == event.target) {
      currentIndex = i;
    }
  }
});

swiper.addEventListener('touchmove', function(event){
  if (drag) {
    distanceY = event.touches[0].pageY - pageY;
  }
});

swiper.addEventListener('touchend', function(event){
  var interval = new Date() - startTime;
  var moveDistance = Math.abs(distanceY);
  var viewportHeight = event.target.offsetHeight;
  drag = false;
  if (interval < intervalTime) {
    return false;
  }
  if (moveDistance > intervalDistance) {
    var tapDistance = 0;
    if (distanceY > 0 && currentIndex == 0) {
      console.log("已经滑到顶了");
      return false;
    } 
    if (distanceY < 0 && currentIndex == parentList.length-1) {
      console.log("已经滑到底了");
      return false;
    } 
    if (distanceY < 0) {
      tapDistance = (currentIndex+1) * viewportHeight;
      console.log("下滑");
    } 
    if (distanceY > 0)  {
      tapDistance = Math.abs(currentIndex-1) * viewportHeight;
      console.log("上滑");
    }
    swiper.style.transform = 'translateY(-'+ tapDistance +'px)';
  } 
});

