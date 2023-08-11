
// Slider
let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


// Burger
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (element) {
  element.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('stop-scroll');
  })
})

// Search
let searchBtn = document.querySelector('.search-btn');
let cancelBtn = document.querySelector('.cancel-btn');
let searchBox = document.querySelector('.search-box');
let searchInput = document.querySelector('.search-input');
let headerNav = document.querySelector('.header__nav');
let headerLogo = document.querySelector('.header__logo');

searchBtn.onclick = () => {
  searchBox.classList.add('act');
  searchInput.classList.add('act');
  cancelBtn.classList.add('act');
  headerNav.classList.add('act');
  headerLogo.classList.add('act');
  searchBtn.classList.add('act');
}
cancelBtn.onclick = () => {
  searchBox.classList.remove('act');
  searchInput.classList.remove('act');
  cancelBtn.classList.remove('act');
  headerNav.classList.remove('act');
  searchBtn.classList.remove('act');
  headerLogo.classList.remove('act');
}

// Tabs
const howItemLinks = document.querySelectorAll('.how__item-link');
const rowTabs = document.querySelectorAll('.row-tabs');
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest('.how__item-link')) {
    howItemLinks.forEach((howItemLink, index) => {
      if (howItemLink.classList.contains('active')) {
        currentActiveIndex = index;
        howItemLink.classList.remove('active');
      }
      if (howItemLink === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    rowTabs[currentActiveIndex].classList.remove('active');
    rowTabs[newActiveIndex].classList.add('active');
  }
});
