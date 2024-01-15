let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-menu');
let menuItem = document.querySelectorAll('.close-menu');

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('is-open');
  });

  menuItem.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      menu.classList.toggle('is-open');
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var lazyloadImages = document.querySelectorAll('.lazyload');
  lazyloadImages.forEach(function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
  });
});
