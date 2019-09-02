'use strict';
import { tns } from './../../node_modules/tiny-slider/src/tiny-slider';
// eslint-disable-next-line no-unused-vars
const newFurnitureSlider = tns({
  container: '.new-furniture-slider',
  items: 1,
  slideBy: 'page',
  controls: false,
  mouseDrag: true,
  swipeAngle: 20,
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

const DOTS = document.getElementsByClassName('pagination-dot-li');
// const VIEWPORT_WIDTH = document.documentElement.clientWidth;

// // funkcja wyśiwetlająca odpowiednie kropki w zależności szerokości okna
// function showDot () {
//   for (let i = 0; i < DOTS.length; i++) {
//     DOTS[i].classList.remove('show-dot');
//     DOTS[0].classList.add('show-dot', 'active');
//     if (VIEWPORT_WIDTH >= 1200) {
//       let numberofSlides = 4;
//       if ((i + 1) % (numberofSlides + 1) === 0) {
//         DOTS[i].classList.add('show-dot');
//       }
//     } else if (VIEWPORT_WIDTH >= 992 && VIEWPORT_WIDTH < 1200) {
//       let numberofSlides = 3;
//       if (
//         (i + 1) % (numberofSlides + 1) === 0 ||
//         (i + 4) % (numberofSlides + 4) === 0
//       ) {
//         DOTS[i].classList.add('show-dot');
//       }
//     } else if (VIEWPORT_WIDTH >= 576 && VIEWPORT_WIDTH < 992) {
//       let numberofSlides = 2;
//       if (
//         (i + 1) % (numberofSlides + 1) === 0 ||
//         (i + 3) % (numberofSlides + 3) === 0 ||
//         (i + 5) % (numberofSlides + 5) === 0
//       ) {
//         DOTS[i].classList.add('show-dot');
//       }
//     } else {
//       DOTS[i].classList.add('show-dot');
//     }
//   }
// }
// showDot();

// // wywołanie funkcji showDot po zmianie szerokości okna
// let resizeId;
// window.addEventListener('resize', function () {
//   clearTimeout(resizeId);
//   resizeId = setTimeout(doneResizing, 500);
// });

// function doneResizing () {
//   showDot();
// }

//  obsługa klików
//  funkcja ogólna
function click (target, callback) {
  document.querySelector(target).addEventListener('click', function (e) {
    e.preventDefault();
    return callback(e);
  });
}
// // zmiana slajdów
// for (let i = 0; i < DOTS.length; i++) {
//   let k = i + 1;
//   DOTS[i].onclick = function () {
//     newFurnitureSlider.goTo(k);
//   };
// }
// zmiana koloru kropki
click('.slider-pagination-dots', function (e) {
  let target = e.target;
  if (target.parentElement.classList.value === 'pagination-dot-li tns-nav-active') {
    for (var j = 0; j < DOTS.length; j++) {
      DOTS[j].classList.remove('active');
    }
    target.parentElement.classList.add('active');
  }
});
