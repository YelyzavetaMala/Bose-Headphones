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
    834: { slidesPerView: 2.5, spaceBetween: 32 },
    1440: { slidesPerView: 4, spaceBetween: 32 },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true,
  },

  mousewheel: true,
};

const swiper = new Swiper('.swiper-review-init', swiperParams);
