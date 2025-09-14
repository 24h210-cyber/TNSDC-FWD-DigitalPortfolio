// Create animated background elements
const animatedBg = document.getElementById('animatedBg');
for (let i = 0; i < 30; i++) {
    const span = document.createElement('span');
    span.style.left = Math.random() * 100 + 'vw';
    span.style.animationDuration = (Math.random() * 10 + 10) + 's';
    span.style.animationDelay = Math.random() * 5 + 's';
    span.style.width = Math.random() * 20 + 5 + 'px';
    span.style.height = span.style.width;
    animatedBg.appendChild(span);
}

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Sparkle Button Effect
const sparkleBtn = document.getElementById('sparkleBtn');
sparkleBtn.addEventListener('mouseenter', (e) => { createSparkles(e); });
sparkleBtn.addEventListener('click', (e) => { createSparkles(e); });

function createSparkles(e) {
    const buttonRect = sparkleBtn.getBoundingClientRect();
    const buttonX = e.clientX - buttonRect.left;
    const buttonY = e.clientY - buttonRect.top;
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        const size = Math.random() * 8 + 4;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = (Math.random() - 0.5) * 100;
        sparkle.style.left = `${buttonX + offsetX}px`;
        sparkle.style.top = `${buttonY + offsetY}px`;
        const colors = ['#00f7ff', '#ff00d2', '#9600ff', '#ffffff'];
        sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
        sparkleBtn.appendChild(sparkle);
        setTimeout(() => { sparkle.remove(); }, 1000);
    }
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled'); 
    else header.classList.remove('scrolled');
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) backToTop.classList.add('visible'); 
    else backToTop.classList.remove('visible');
});

// Animate skill bars on scroll
const skillLevels = document.querySelectorAll('.skill-level');
function animateSkills() {
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        const skillPosition = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (skillPosition < screenPosition) {
            skill.style.width = level;
        }
    });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);