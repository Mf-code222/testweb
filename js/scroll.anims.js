import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js/+esm";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
    const elements = document.querySelectorAll(".scroll-experience");

    if (!elements.length) {
        return;
    }

    elements.forEach((element) => {
        gsap.fromTo(
            element,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}
