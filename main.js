document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();

    const productCards = document.querySelectorAll('.product-item');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            alert(`You clicked ${this.getAttribute('data-product')}`);
        });
    });
});
