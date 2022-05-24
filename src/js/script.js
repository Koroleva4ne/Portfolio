const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu. classList.add('active');
});

close.addEventListener('click', () => {
    menu. classList.remove('active');
});

const percents = document.querySelectorAll('.skills__progress-percent'),
      scales = document.querySelectorAll('.skills__progress-scale span');

percents.forEach( (item, i) => {
    scales[i].style.width = item.innerHTML;
});