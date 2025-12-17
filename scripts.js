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
        // Перевіряємо, чи елемент знаходиться в межах 80% видимої області
        if (rect.top < window.innerHeight * 0.8) {
            el.classList.add('active');
        }
    });
}

// -------------------- Активне Виділення Меню --------------------
function highlightMenu() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-menu a');
    let current = '';

    // Знаходимо активну секцію, яка знаходиться найближче до верхньої частини екрана
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Використовуємо зміщення на 150px для кращого досвіду
        if (pageYOffset >= sectionTop - 150 && pageYOffset < sectionTop + sectionHeight - 150) {
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
    // Додаємо клас fade-in до всіх карток, які не мають його
    document.querySelectorAll('.card').forEach(card => {
        if (!card.classList.contains('fade-in')) {
            card.classList.add('fade-in');
        }
    });

    // Об'єднуємо обробники скролу за допомогою debounce
    const handleScroll = debounce(() => {
        checkVisibility();
        highlightMenu();
    }, 10); // Затримка 10ms

    window.addEventListener('scroll', handleScroll);
    
    // Перший запуск при завантаженні
    checkVisibility();
    highlightMenu(); 
});
