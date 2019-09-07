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

// Furniture Gallery Sliders
const gallerySliderFeatured = tns({
  container: '#slider-featured',
  mode: 'gallery',
  speed: 800,
  items: 1,
  controls: false,
  nav: false
});

const gallerySliderTopseller = tns({
  container: '#slider-topseller',
  mode: 'gallery',
  speed: 800,
  items: 1,
  controls: false,
  nav: false
});

const gallerySliderSaleoff = tns({
  container: '#slider-saleoff',
  mode: 'gallery',
  speed: 800,
  items: 1,
  controls: false,
  nav: false
});

const gallerySliderToprated = tns({
  container: '#slider-toprated',
  mode: 'gallery',
  speed: 800,
  items: 1,
  controls: false,
  nav: false
});

const thumbnails = document.getElementsByClassName('controls-thumbnails');
console.log(thumbnails[0].children.length);
const sliders = [
  gallerySliderFeatured,
  gallerySliderTopseller,
  gallerySliderSaleoff,
  gallerySliderToprated
];

for (let i = 0; i < thumbnails.length; i++) {
  // wybieram każdy slider po kolei
  for (let j = 0; j < thumbnails[i].children.length; j++) {
    thumbnails[i].children[j].addEventListener('click', function (e) {
      e.preventDefault();
      console.log(thumbnails[i].children[j]);
      for (let j = 0; j < thumbnails[i].children.length; j++) {
        thumbnails[i].children[j].classList.add('overlay');
      }
      sliders[i].goTo(j);
      e.target.parentElement.classList.remove('overlay');
    });
  }
}

// obsługa strzałek
const controlArrows = document.getElementsByClassName('control-arrow');
for (let i = 0; i < controlArrows.length; i++) {
  controlArrows[i].addEventListener('click', function (e) {
    e.preventDefault();
    if (i < 2) {
      for (let j = 0; j < thumbnails[0].children.length; j++) {
        thumbnails[0].children[j].classList.toggle('hide');
      }
    } else if (i >= 2 && i < 4) {
      for (let j = 0; j < thumbnails[1].children.length; j++) {
        thumbnails[1].children[j].classList.toggle('hide');
      }
    } else if (i >= 4 && i < 6) {
      for (let j = 0; j < thumbnails[2].children.length; j++) {
        thumbnails[2].children[j].classList.toggle('hide');
      }
    } else if (i >= 6 && i < 8) {
      for (let j = 0; j < thumbnails[3].children.length; j++) {
        thumbnails[3].children[j].classList.toggle('hide');
      }
    }
  });
}

// obsługa tabów kategorii
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
    showFurnitureSlider(i);
    showFurnitureGalleryControls(i);
    productCategoryActive();
    e.target.classList.add('active');
  });
}

function showFurnitureSlider (x) {
  for (let i = 0; i < furnitureGallerySliders.length; i++) {
    furnitureGallerySliders[i].classList.add('hide');
  }
  furnitureGallerySliders[x].classList.remove('hide');
}
function showFurnitureGalleryControls (x) {
  for (let i = 0; i < furnitureGalleryControls.length; i++) {
    furnitureGalleryControls[i].classList.add('hide');
  }
  furnitureGalleryControls[x].classList.remove('hide');
}
function productCategoryActive () {
  for (let i = 0; i < productCategories.length; i++) {
    productCategories[i].classList.remove('active');
  }
}
