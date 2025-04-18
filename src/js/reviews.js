import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Mousewheel,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperParams = {
  modules: [Pagination, Navigation, Scrollbar, Keyboard, Mousewheel],

  breakpoints: {
    375: { slidesPerView: 1, spaceBetween: 32 },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      let pages = '';
      for (let i = 1; i <= total; i++) {
        pages +=
          i === current
            ? `<span class="page-number active">0${i}</span>`
            : `<span class="page-number">0${i}</span>`;

        if (i < total) pages += ' - '; // Додаємо тире між номерами
      }
      return pages;
    },
  },

  keyboard: {
    enabled: true,
  },

  mousewheel: true,
};

const swiper = new Swiper('.swiper-review-init', swiperParams);

document.querySelectorAll('.review-info-card').forEach(card => {
  const video = card.querySelector('.reviews-video');
  const playButton = card.querySelector('.play-btn');

  playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none'; // Ховаємо кнопку тільки для цього відео
  });

  video.addEventListener('pause', () => {
    playButton.style.display = 'block'; // Показуємо кнопку, якщо відео зупинено
  });
});
