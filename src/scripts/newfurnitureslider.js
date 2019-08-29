import { tns } from './../../node_modules/tiny-slider/src/tiny-slider';
// eslint-disable-next-line no-unused-vars
const newFurnitureSlider = tns({
  controls: false,
  autoWidth: true,
  items: 1,
  slideBy: 1,
  responsive: {
    576: {
      items: 2,
      slideBy: 2
    },
    960: {
      items: 3,
      slideBy: 3
    },
    1200: {
      items: 4,
      slideBy: 4
    }
  },
  container: '.new-furniture-slider',
  mouseDrag: true,
  swipeAngle: false,
  nav: true
});
