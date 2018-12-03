var btnNode = document.getElementById('foot').children;
var cube = document.getElementById('cube');
// var btnObj = {
//   name: '按钮',
//   clickEvent: function(item, index){
//     btnNode[index].addEventListener('click', function(event){
//       console.log(item.innerText);
//     });
//     return item.className;
//   }
// }
// Array.prototype.forEach.bind(btnNode, btnObj.clickEvent)();
for (var i=0; i<btnNode.length; i++) {
  btnNode[i].addEventListener('click', function(event){
    if (this.innerText == '默认') {
      cube.style.transform = 'rotate3d(0.1, 0.2, 0, 30deg)';
    } else if (this.innerText == '前面') {
      cube.style.transform = 'rotate3d(0.2, -0.1, 0, 30deg)';
    } else if (this.innerText == '后面') {
      cube.style.transform = 'rotate3d(0.1, 0.4, 0.1, 30deg)';
    } else if (this.innerText == '左面') {
      cube.style.transform = 'rotate3d(-0.1, 0.5, 0, 30deg)';
    } else if (this.innerText == '右面') {
      cube.style.transform = 'rotate3d(0.1, 0.2, -0.3, 30deg)';
    } else if (this.innerText == '上面') {
      cube.style.transform = 'rotate3d(-0.1, -0.2, 1, 30deg)';
    } else if (this.innerText == '下面') {
      cube.style.transform = 'rotate3d(0.1, -0.2, -0.1, 30deg)';
    } else if (this.innerText == '随机') {
      cube.style.transform = 'rotate3d(1, -0.2, 1, 30deg)';
    } else {

    }
    console.log(this.innerText)
  })
}