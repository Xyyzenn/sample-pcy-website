// Fade-in for sections
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold:0.3 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Hero background fade on scroll
const heroBg = document.querySelector('.hero-bg');
if(heroBg){
    window.addEventListener('scroll', () => {
        let opacity = 1 - window.scrollY / window.innerHeight;
        opacity = Math.max(0, Math.min(1, opacity));
        heroBg.style.opacity = opacity;
    });
}

// Gallery fade-in
const galleryImages = document.querySelectorAll('.activity-gallery img');
const galleryObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
},{threshold:0.3});
galleryImages.forEach(img => galleryObserver.observe(img));