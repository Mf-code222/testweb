import gsap from 'gsap';

// Scroll animation functions
export function initScrollAnimations() {
  gsap.to('.scroll-experience', {
    scrollTrigger: '.scroll-experience',
    y: -50,
    duration: 1.5,
    ease: 'power2.inOut'
  });
}
