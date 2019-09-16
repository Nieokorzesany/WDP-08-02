import { tns } from './../../node_modules/tiny-slider/src/tiny-slider';

// Section New Furniture Slider
// eslint-disable-next-line no-unused-vars

const option = {
  items: 1,
  slideBy: 'page',
  controls: false,
  mouseDrag: true,
  swipeAngle: 20,
  startIndex: 1,
  navContainer: '.slider-pagination-dots',
  gutter: 15,
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
};
tns(Object.assign({ container: '.new-furniture-slider-bed' }, option));
tns(Object.assign({ container: '.new-furniture-slider-chair' }, option));
tns(Object.assign({ container: '.new-furniture-slider-sofa' }, option));
tns(Object.assign({ container: '.new-furniture-slider-table' }, option));
tns(Object.assign({ container: '.new-furniture-slider-dining' }, option));
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
const sliderFeatured = { container: '#slider-featured' };
const sliderTopseller = { container: '#slider-topseller' };
const sliderSaleoff = { container: '#slider-saleoff' };
const sliderToprated = { container: '#slider-toprated' };

const furnitureGallerySlidersParams = {
  mode: 'gallery',
  speed: 1000,
  items: 1,
  controls: false,
  nav: false,
  mouseDrag: true
};

const gallerySliderFeatured = tns({
  ...sliderFeatured,
  ...furnitureGallerySlidersParams
});

const gallerySliderTopseller = tns({
  ...sliderTopseller,
  ...furnitureGallerySlidersParams
});

const gallerySliderSaleoff = tns({
  ...sliderSaleoff,
  ...furnitureGallerySlidersParams
});

const gallerySliderToprated = tns({
  ...sliderToprated,
  ...furnitureGallerySlidersParams
});

const thumbnails = document.getElementsByClassName('thumbail-slider-controls');
const sliders = [
  gallerySliderFeatured,
  gallerySliderTopseller,
  gallerySliderSaleoff,
  gallerySliderToprated
];
// obsługa overlaya na thumbailach
for (let i = 0; i < thumbnails.length; i++) {
  for (let j = 0; j < thumbnails[i].children.length; j++) {
    thumbnails[i].children[j].addEventListener('click', function (e) {
      e.preventDefault();
      for (let j = 0; j < thumbnails[i].children.length; j++) {
        thumbnails[i].children[j].classList.add('overlay');
      }
      sliders[i].goTo(j);
      e.target.parentElement.classList.remove('overlay');
    });
  }
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
    showFurnitureSliderAndControls(i);
    productCategoryActive();
    e.target.classList.add('active');
  });
}

function showFurnitureSliderAndControls (x) {
  for (let i = 0; i < furnitureGallerySliders.length; i++) {
    furnitureGallerySliders[i].classList.add('hide', 'visuallyhide');
  }
  if (furnitureGallerySliders[x].classList.contains('hide')) {
    furnitureGallerySliders[x].classList.remove('hide');
    setTimeout(function () {
      furnitureGallerySliders[x].classList.remove('visuallyhide');
    }, 20);
  }
  for (let i = 0; i < furnitureGalleryControls.length; i++) {
    furnitureGalleryControls[i].classList.add('hide', 'visuallyhide');
  }
  if (furnitureGalleryControls[x].classList.contains('hide')) {
    furnitureGalleryControls[x].classList.remove('hide');
    setTimeout(function () {
      furnitureGalleryControls[x].classList.remove('visuallyhide');
    }, 20);
  }
}

function productCategoryActive () {
  for (let i = 0; i < productCategories.length; i++) {
    productCategories[i].classList.remove('active');
  }
}

// thumbnails sliders
const featuredThumbnails = {
  container: '.controls-thumbnails .featured-controls-thumbnails-row'
};
const topSellerThumbnails = {
  container: '.controls-thumbnails .topseller-controls-thumbnails-row'
};
const saleOffThumbnails = {
  container: '.controls-thumbnails .saleoff-controls-thumbnails-row'
};
const topRatedThumbnails = {
  container: '.controls-thumbnails .toprated-controls-thumbnails-row'
};

const furnitureGalleryThumbnailsSliderParams = {
  items: 3,
  slideBy: 'page',
  nav: false,
  loop: false,
  gutter: 8,
  controls: false,
  mouseDrag: true,
  swipeAngle: 20,
  responsive: {
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 6
    }
  }
};

const featuredThumbnailsSlider = tns({
  ...featuredThumbnails,
  ...furnitureGalleryThumbnailsSliderParams
});

const topSellerThumbnailsSlider = tns({
  ...topSellerThumbnails,
  ...furnitureGalleryThumbnailsSliderParams
});

const saleOffThumbnailsSlider = tns({
  ...saleOffThumbnails,
  ...furnitureGalleryThumbnailsSliderParams
});

const topRatedThumbnailsSlider = tns({
  ...topRatedThumbnails,
  ...furnitureGalleryThumbnailsSliderParams
});

// obsługa strzałek
const thumbnailsControlArrows = document.getElementsByClassName('control-arrow');
const thumbnailsSliders = [
  featuredThumbnailsSlider,
  topSellerThumbnailsSlider,
  saleOffThumbnailsSlider,
  topRatedThumbnailsSlider
];

for (let i = 0; i < thumbnailsControlArrows.length; i++) {
  thumbnailsControlArrows[i].addEventListener('click', function (e) {
    e.preventDefault();
    if (i % 2 === 0) {
      for (let j = 0; j < thumbnailsSliders.length; j++) {
        thumbnailsSliders[j].goTo('prev');
      }
    } else {
      for (let j = 0; j < thumbnailsSliders.length; j++) {
        thumbnailsSliders[j].goTo('next');
      }
    }
  });
}

const tabs = document.querySelectorAll('#nav-tab li > a');

function tabClick (event) {
  event.preventDefault();

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  let clickedTab = event.currentTarget;
  clickedTab.classList.add('active');

  let contentPanes = document.querySelectorAll('.tab-pane');
  for (let i = 0; i < contentPanes.length; i++) {
    contentPanes[i].classList.remove('active');
  }

  let anchorReference = event.target;

  let activePaneId = anchorReference.getAttribute('href');

  let activePane = document.querySelector(activePaneId);

  activePane.classList.add('active');
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabClick);
}
