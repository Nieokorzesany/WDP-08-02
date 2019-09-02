import { tns } from './../../node_modules/tiny-slider/src/tiny-slider';

// Section New Furniture Slider
const newFurnitureSlider = tns({
  container: '.new-furniture-slider',
  items: 1,
  slideBy: 'page',
  controls: false,
  mouseDrag: true,
  swipeAngle: 20,
  startIndex: 1,
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

// Stars on the photos
const stars = document.getElementsByClassName('stars');

for (let i = 0; i < stars.length; ++i) {
  for (let j = 0; j < stars[i].children.length; ++j) {
    stars[i].children[j].addEventListener('click', function () {
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
