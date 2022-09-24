let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function(){
  offset = offset + 58;
  sliderLine.style.left = -offset + '%';
});
