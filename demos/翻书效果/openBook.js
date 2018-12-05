var openBtn =  document.getElementById('open');
var closeBtn = document.getElementById('close');

openBtn.addEventListener('click', function(){
  document.querySelector('.home').style.transform = 'rotateY(-180deg)';
});

closeBtn.addEventListener('click', function(){
  document.querySelector('.page1').style.transform = 'rotateY(0deg)';
});
