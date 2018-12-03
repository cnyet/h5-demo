var btnNode = document.getElementById('foot').children;
var cube = document.getElementById('cube');
var btnObj = {
  name: '按钮',
  clickEvent: function(item, index){
    var styleObj = {
      0: 'translateZ(-150px) rotateY(-15deg) rotateX(-15deg)',
      1: 'translateZ(-150px) rotateY(0deg) rotateX(0deg)',
      2: 'translateZ(-150px) rotateY(0deg) rotateX(180deg)',
      3: 'translateZ(-100px) rotateY(90deg) rotateX(0deg)',
      4: 'translateZ(-100px) rotateY(-90deg) rotateX(0deg)',
      5: 'translateZ(-200px) rotateY(0deg) rotateX(90deg)',
      6: 'translateZ(-200px) rotateY(0deg) rotateX(-90deg)'
    }
    btnNode[index].addEventListener('click', function(){
      if (index == 7) {
        cube.style.transform = 'translateZ(-100px) rotateY('+ btnObj.randomAxis() +') rotateX('+ btnObj.randomAxis() +')';
        return;
      }
      cube.style.transform = styleObj[index];
    });
  },
  randomAxis: function() {
    var sign = parseInt(Math.random()*10%2) == 0 ? '-' : '';
    var axis = sign + Math.round(Math.random()*360) + 'deg';
    return axis;
  }
}
Array.prototype.forEach.bind(btnNode, btnObj.clickEvent)();
// for (var i=0; i<btnNode.length; i++) {
//   btnNode[i].addEventListener('click', function(event){
//     if (this.innerText == '默认') {
//       cube.style.transform = 'translateZ(-150px) rotateY(-15deg) rotateX(-15deg)';
//     } else if (this.innerText == '前面') {
//       cube.style.transform = 'translateZ(-150px) rotateY(0deg) rotateX(0deg)';
//     } else if (this.innerText == '后面') {
//       cube.style.transform = 'translateZ(-150px) rotateY(0deg) rotateX(180deg)';
//     } else if (this.innerText == '左面') {
//       cube.style.transform = 'translateZ(-100px) rotateY(90deg) rotateX(0deg)';
//     } else if (this.innerText == '右面') {
//       cube.style.transform = 'translateZ(-100px) rotateY(-90deg) rotateX(0deg)';
//     } else if (this.innerText == '上面') {
//       cube.style.transform = 'translateZ(-150px) rotateY(0deg) rotateX(90deg)';
//     } else if (this.innerText == '下面') {
//       cube.style.transform = 'translateZ(-150px) rotateY(0deg) rotateX(-90deg)';
//     } else if (this.innerText == '随机') {
//       cube.style.transform = 'translateZ(-100px) rotateY('+ randomAxis() +') rotateX('+ randomAxis() +')';
//     } else {

//     }
//     console.log(this)
//   })
// }

// function randomAxis() {
//   var sign = parseInt(Math.random()*10%2) == 0 ? '-' : '';
//   var axis = sign + Math.round(Math.random()*360) + 'deg';
//   return axis;
// }