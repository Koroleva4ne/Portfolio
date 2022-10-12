function closeMenu(menuSelector) {
    const menu = document.querySelector(menuSelector);
    menu.classList.remove('active');
}

function menu(menuSelector) {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector(menuSelector),
          close = document.querySelector('.menu__close'),
          menuLink = document.querySelectorAll('.menu__link');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        closeMenu(menuSelector);
    })

    menu.addEventListener('click', () => {
        closeMenu(menuSelector);
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu(menuSelector);
        });
    });
}

export default menu;