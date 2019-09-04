import { tns } from './../../node_modules/tiny-slider/src/tiny-slider';
// eslint-disable-next-line no-unused-vars
const blogSlider = tns({
  container: '.blog-slider',
  items: 1,
  slideBy: 'page',
  controls: false,
  mouseDrag: true,
  swipeAngle: 20,
  startIndex: 1,
  navContainer: '.blog-slider-pagination-dots',
  responsive: {
    576: {
      items: 2,
      gutter: 15
    },
    992: {
      items: 3,
      gutter: 15
    }
  }
});

const brandsSlider = tns({
  container: '.brands-slider .row',
  items: 6,
  slideBy: 'page',
  nav: false,
  gutter: 15,
  controls: false,
  mouseDrag: true,
  swipeAngle: 20,
  startIndex: 1
});

document
  .querySelector('.brands-slider .btn-prev')
  .addEventListener('click', () => brandsSlider.goTo('prev'));
document
  .querySelector('.brands-slider .btn-next')
  .addEventListener('click', () => brandsSlider.goTo('next'));

const stars = document.getElementsByClassName('stars');

for (let i = 0; i < stars.length; ++i) {
  for (let j = 0; j < stars[i].children.length; ++j) {
    stars[i].children[j].addEventListener('click', function (e) {
      e.preventDefault();
      emptyStar(stars[i].children);
      fillStar(j, stars[i].children);
    });
  }
}

function fillStar (index, list) {
  for (let i = 0; i < index + 1; i++) {
    list[i].classList.add('full');
  }
}

function emptyStar (list) {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove('full');
  }
}
