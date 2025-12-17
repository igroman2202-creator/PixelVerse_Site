// Оптимізація викликів
function debounce(func, delay = 15) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), delay);
    };
}

// Активне меню
function highlightMenu() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-menu a');
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
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

// Анімація появи карток (Intersection Observer)
const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    // Налаштовуємо картки для анімації
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('fade-in');
        revealOnScroll.observe(card);
    });

    window.addEventListener('scroll', debounce(highlightMenu));
    highlightMenu(); // Запуск при завантаженні
});
