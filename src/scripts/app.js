const stars = document.getElementsByClassName('stars');

for (let i = 0; i < stars.length; ++i) {
  for (let j = 0; j < stars[i].children.length; ++j) {
    // console.log(i, j, stars[i].children[j]);
    stars[i].children[j].addEventListener('click', function () {
      // console.log('clicked');
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
