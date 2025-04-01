const productImage = document.getElementById('productImage');
const blackBtn = document.getElementById('blackBtn');
const whiteBtn = document.getElementById('whiteBtn');

let currentColor = 'black';

function changeColor(color) {
  const imagePaths = {
    black: '/img/options/options-black-desk-1x.jpg',
    white: '/img/options/options-white-desk-1x.jpg',
  };

  productImage.src = imagePaths[color];

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
