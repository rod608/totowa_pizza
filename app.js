/* Custom Scripts */
menuBtn = document.querySelector('.navbar-toggler');
navbar = document.querySelector('nav');
let menuOpen = false;

// 
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navbar.classList.add('bg-white');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navbar.classList.remove('bg-white');
        menuOpen = false;
    }
});

/* Mobile: Automatically close navbar dropdown once an option is selected. */

// Step #1: Make query selectors for all nav items.
navItems = document.querySelectorAll('.nav-item');

// Step #2: Add an event listener that listens for a click
navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        if (menuOpen) {
            setTimeout(() => {menuBtn.click()}, '800');
        }
    });
});
