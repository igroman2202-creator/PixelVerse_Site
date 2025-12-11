// -------------------- Функція Debounce для оптимізації скролу --------------------
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// -------------------- Активне Виділення Меню --------------------
function highlightMenu() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-menu a');
    let current = '';

    // Знаходимо активну секцію, яка знаходиться найближче до верхньої частини екрана
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // Використовуємо зміщення на 150px для кращого досвіду
        if (window.scrollY >= sectionTop - 150) { 
            current = section.getAttribute('id');
        }
    });

    // Знімаємо active клас з усіх посилань
    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            // Додаємо active клас до поточного посилання
            a.classList.add('active');
        }
    });
}


// -------------------- Ініціалізація --------------------
document.addEventListener('DOMContentLoaded', () => {
    // Об'єднуємо обробники скролу за допомогою debounce
    const handleScroll = debounce(() => {
        highlightMenu();
    }, 10); 

    window.addEventListener('scroll', handleScroll);
    
    // Перший запуск при завантаженні
    highlightMenu(); 
});
