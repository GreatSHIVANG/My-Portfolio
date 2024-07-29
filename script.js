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
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                experienceSection.style.transition = 'opacity 1s';
                experienceSection.style.opacity = 1;
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(experienceSection);
});
