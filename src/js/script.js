import menu from './modules/menu';

window.addEventListener('DOMContentLoaded', () => {
    menu('.menu');

    const percents = document.querySelectorAll('.skills__progress-percent'),
          scales = document.querySelectorAll('.skills__progress-scale span');
    
    percents.forEach( (item, i) => {
        scales[i].style.width = item.innerHTML;
    });
});