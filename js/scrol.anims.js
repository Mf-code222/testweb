import { gsap } from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js';

export function initScrollAnimations() {
    gsap.to('.scroll-experience', {
        scrollTrigger: '.scroll-experience',
        y: -50,
        duration: 1.5,
        ease: 'power2.inOut'
    });
}
