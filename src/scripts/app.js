import { tns } from './../../node_modules/tiny-slider/src/tiny-slider';

// Section New Furniture Slider
// eslint-disable-next-line no-unused-vars
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

// Section Brand Slider
const brandsSlider = tns({
  container: '.brands-slider .row',
  items: 1,
  slideBy: 'page',
  nav: false,
  gutter: 15,
  controls: false,
  mouseDrag: true,
  swipeAngle: 20,
  startIndex: 1,
  responsive: {
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 6
    }
  }
});

document
  .querySelector('.brands-slider .btn-prev')
  .addEventListener('click', () => brandsSlider.goTo('prev'));
document
  .querySelector('.brands-slider .btn-next')
  .addEventListener('click', () => brandsSlider.goTo('next'));

// Section Blog Slider
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

// Stars on the photos
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

// Featured Gallery Slider
const gallerySliderFeatured = tns({
  container: '#slider-featured',
  mode: 'gallery',
  speed: 800,
  items: 1,
  controls: false,
  nav: false
});

// eslint-disable-next-line no-unused-vars
const gallerySliderTopseller = tns({
  container: '#slider-topseller',
  mode: 'gallery',
  speed: 800,
  items: 1,
  controls: false,
  nav: false
});

// eslint-disable-next-line no-unused-vars
const gallerySliderSaleoff = tns({
  container: '#slider-saleoff',
  mode: 'gallery',
  speed: 800,
  items: 1,
  controls: false,
  nav: false
});

// eslint-disable-next-line no-unused-vars
const gallerySliderToprated = tns({
  container: '#slider-toprated',
  mode: 'gallery',
  speed: 800,
  items: 1,
  controls: false,
  nav: false
});

const thumbnails = document.getElementsByClassName('controls-thumbnails');
console.log(thumbnails[0].id);

const thumbnailsArray = [];
for (let i = 0; i < thumbnails.length; i++) {
  thumbnailsArray.push("'#" + thumbnails[i].id + " > li'");
}
console.log(thumbnailsArray.length);
console.log(thumbnailsArray[0]);

// for (let j = 0; j < thumbnailsArray.length; j++) {
//   for (let i = 0; i < thumbnailsArray[i].children.length; i++) {
//     thumbnailsArray[i].children.addEventListener('click', function (e) {
//       e.preventDefault();
//       slideOverlay();
//       gallerySliderFeatured.goTo(i);
//       e.target.parentElement.classList.remove('overlay');
//     });
//   }
// }

const featuredThumbnails = document.querySelectorAll(
  '#featured-controls-thumbnails > li'
);
// przewijam slajdy kliknięciem w miniaturki i toglujemy overlaya
for (let i = 0; i < featuredThumbnails.length; i++) {
  featuredThumbnails[i].addEventListener('click', function (e) {
    e.preventDefault();
    slideOverlay();
    gallerySliderFeatured.goTo(i);
    e.target.parentElement.classList.remove('overlay');
  });
}

// obsługa strzałek
const featuredControlArrows = document.getElementsByClassName('featured-control-arrow');
for (let i = 0; i < featuredControlArrows.length; i++) {
  featuredControlArrows[i].addEventListener('click', function (e) {
    e.preventDefault();
    slideThumbnails();
  });
}

// ogarnąc to z name jako argumentem
function slideThumbnails (name) {
  for (let i = 0; i < featuredThumbnails.length; i++) {
    featuredThumbnails[i].classList.toggle('hide');
  }
}

function slideOverlay (name) {
  for (let i = 0; i < featuredThumbnails.length; i++) {
    featuredThumbnails[i].classList.add('overlay');
  }
}

const productCategories = document.getElementsByClassName('product-category-name');
const furnitureGallerySliders = document.getElementsByClassName(
  'furniture-gallery-slider'
);
const furnitureGalleryControls = document.getElementsByClassName(
  'furniture-gallery-controls'
);
for (let i = 0; i < productCategories.length; i++) {
  productCategories[i].addEventListener('click', function (e) {
    e.preventDefault();
    showFurnitureSlider();
    showFurnitureGalleryControls();
  });
}

function showFurnitureSlider () {
  for (let i = 0; i < furnitureGallerySliders.length; i++) {
    furnitureGallerySliders[i].classList.toggle('hide');
  }
}
function showFurnitureGalleryControls () {
  for (let i = 0; i < furnitureGalleryControls.length; i++) {
    furnitureGalleryControls[i].classList.toggle('hide');
  }
}
