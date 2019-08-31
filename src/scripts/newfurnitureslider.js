'use strict';
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
  nav: false,
  // navContainer: '.slider-pagination-dots',
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

const DOTS = document.getElementsByClassName('pagination-dot-li');
const VIEWPORT_WIDTH = parseInt(window.innerWidth);

function showDot () {
  for (let i = 0; i < DOTS.length; i++) {
    DOTS[i].classList.remove('show-dot');
    DOTS[0].classList.add('show-dot');
    DOTS[0].classList.add('active');
    if (VIEWPORT_WIDTH >= 1200) {
      let numberofSlides = 4;
      if ((i + 1) % (numberofSlides + 1) === 0) {
        DOTS[i].classList.add('show-dot');
      }
    } else if (VIEWPORT_WIDTH >= 992 && VIEWPORT_WIDTH < 1200) {
      let numberofSlides = 3;
      if (
        (i + 1) % (numberofSlides + 1) === 0 ||
        (i + 4) % (numberofSlides + 4) === 0
      ) {
        DOTS[i].classList.add('show-dot');
      }
    } else if (VIEWPORT_WIDTH >= 576 && VIEWPORT_WIDTH < 992) {
      let numberofSlides = 2;
      if (
        (i + 1) % (numberofSlides + 1) === 0 ||
        (i + 3) % (numberofSlides + 3) === 0 ||
        (i + 5) % (numberofSlides + 5) === 0
      ) {
        DOTS[i].classList.add('show-dot');
      }
    } else {
      DOTS[i].classList.add('show-dot');
    }
  }
}
showDot();
// window.onresize = showDot;

//  obsługa klików
//  funkcja ogólna
function click (target, callback) {
  document.querySelector(target).addEventListener('click', function (e) {
    e.preventDefault();
    return callback(e);
  });
}

// zmiana slajdów
for (let i = 0; i < DOTS.length; i++) {
  let k = i + 1;
  DOTS[i].onclick = function () {
    newFurnitureSlider.goTo(k);
  };
}
// zmiana koloru kropki
click('.slider-pagination-dots', function (e) {
  let target = e.target;
  if (target.parentElement.classList.value === 'pagination-dot-li show-dot') {
    for (var j = 0; j < DOTS.length; j++) {
      DOTS[j].classList.remove('active');
    }
    target.parentElement.classList.add('active');
  }
});
