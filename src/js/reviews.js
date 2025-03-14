import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

// Імпортуємо стилі Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Ініціалізуємо Swiper
const swiper = new Swiper('.reviews-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});
