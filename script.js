
        // Add a subtle animation to product cards when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const productCards = document.querySelectorAll('.product-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            productCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
            
            // Add click effect to product cards
            productCards.forEach(card => {
                card.addEventListener('click', function() {
                    const productName = this.querySelector('.product-name').textContent;
                    const productPrice = this.querySelector('.product-price').textContent;
                    alert(`You selected: ${productName}\nPrice: ${productPrice}`);
                });
            });
        });
