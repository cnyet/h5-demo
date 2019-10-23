
var scrollbar = document.getElementById('scrollbar');
var bar = document.getElementById('bar');
var article = document.getElementById('article');
var paragraph = document.getElementById('paragraph');
const distance = paragraph.scrollHeight - article.offsetHeight;
if (distance > 50) {
  scrollbar.style.width = (distance + 50) + 'px';    
} else {
  scrollbar.style.display = 'none';    
}

// 监听鼠标按下时的事件
bar.addEventListener('mousedown', function(e) {
  var len = e.clientX - this.offsetLeft;
  // 指针在元素内移动时持续触发
  scrollbar.addEventListener('mousemove', function(event) {
    var needL = event.clientX - len;
    var maxL = scrollbar.offsetWidth - bar.offsetWidth;
    needL < 0 ? needL = 0 : needL;
    needL > maxL ? needL = maxL : needL;
    bar.style.left = needL + 'px';
    article.scrollTop = bar.offsetLeft;
  });
});
// 在元素上释放任意鼠标按键
bar.addEventListener('mouseup', function() {
  bar.removeEventListener('mousemove');
  bar.removeEventListener('mouseup');
});

article.addEventListener('scroll', function(e) {
  var scrollTop = e.target.scrollTop;
  bar.style.left = scrollTop + 'px';
});