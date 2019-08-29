import { tns } from './../../node_modules/tiny-slider/src/tiny-slider';
// eslint-disable-next-line no-unused-vars
const newFurnitureSlider = tns({
  controls: false,
  autoWidth: true,
  items: 1,
  slideBy: 'page',
  container: '.new-furniture-slider',
  mouseDrag: true,
  swipeAngle: false,
  nav: true,
  navContainer: '.slider-pagination-dots',
  responsive: {
    576: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});
