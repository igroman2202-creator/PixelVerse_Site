const debounce = (func, delay = 10) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

function highlightMenu() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-menu a');
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', debounce(highlightMenu));
    highlightMenu();
});
