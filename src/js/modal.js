const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close-btn');
const listItems = document.querySelectorAll('.modal-item');

openModalBtn.onclick = function () {
  modal.style.display = 'block';
  document.body.classList.add('body-no-scroll');
};

closeModalBtn.onclick = function () {
  modal.style.display = 'none';
  document.body.classList.remove('body-no-scroll');
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.classList.remove('body-no-scroll');
  }
};

listItems.forEach(function (item) {
  item.onclick = function () {
    modal.style.display = 'none';
    document.body.classList.remove('body-no-scroll');
  };
});
