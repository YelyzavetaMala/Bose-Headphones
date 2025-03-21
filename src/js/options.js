const productImage = document.getElementById('productImage');
const blackBtn = document.getElementById('blackBtn');
const whiteBtn = document.getElementById('whiteBtn');

let currentColor = 'black';

function changeColor(color) {
  productImage.src = `/img/options/options-${color}-desk-1x.jpg`;

  if (color === 'black') {
    blackBtn.classList.add('active');
    whiteBtn.classList.remove('active');
  } else {
    whiteBtn.classList.add('active');
    blackBtn.classList.remove('active');
  }

  currentColor = color;
}

blackBtn.addEventListener('click', () => changeColor('black'));
whiteBtn.addEventListener('click', () => changeColor('white'));

changeColor(currentColor);
