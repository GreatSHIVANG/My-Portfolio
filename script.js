document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    const handleScroll = () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScrollY = window.scrollY;
    };

    // Add animation effect to experience section
    const experienceSection = document.querySelector('#experience .experience-content');
    experienceSection.style.opacity = 0;
    window.addEventListener('scroll', () => {
        const rect = experienceSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            experienceSection.style.transition = 'opacity 1s';
            experienceSection.style.opacity = 1;
        }
    });
});
