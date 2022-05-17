// Variables: Query Selector for menu button && menuOpen boolean flag
menuBtn = document.querySelector('.navbar-toggler');
let menuOpen = false;

// Event Listener 4 click
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});