

        document.addEventListener('DOMContentLoaded', function() {
            const productCards = document.querySelectorAll('.product-card');
            const orderButton = document.getElementById('orderButton');
            
            // Product images with different icons for variety
            const productIcons = [
                'fa-ice-cream', 'fa-candy-cane', 'fa-stroopwafel', 'fa-mug-hot',
                'fa-cone', 'fa-cookie-bite', 'fa-birthday-cake', 'fa-glass-whiskey'
            ];
            
            // Assign random icons to product images
            productCards.forEach(card => {
                const imageContainer = card.querySelector('.product-image i');
                const randomIcon = productIcons[Math.floor(Math.random() * productIcons.length)];
                
                // Remove all existing classes and add the random one
                imageContainer.className = 'fas';
                imageContainer.classList.add(randomIcon);
                
                // Add animation on scroll
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    });
                }, { threshold: 0.1 });
                
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
                
                // Add click effect to product cards
                card.addEventListener('click', function() {
                    const productName = this.querySelector('.product-name').textContent;
                    const productPrice = this.querySelector('.price-tag').textContent;
                    
                    // Create a temporary notification
                    const notification = document.createElement('div');
                    notification.innerHTML = `<strong>${productName}</strong> added to cart!`;
                    notification.style.cssText = `
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: #27ae60;
                        color: white;
                        padding: 15px 25px;
                        border-radius: 10px;
                        z-index: 1000;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                        animation: slideIn 0.3s ease;
                    `;
                    
                    document.body.appendChild(notification);
                    
                    // Remove notification after 3 seconds
                    setTimeout(() => {
                        notification.style.animation = 'slideOut 0.3s ease';
                        setTimeout(() => {
                            document.body.removeChild(notification);
                        }, 300);
                    }, 3000);
                });
            });
            
            // Order button click effect
            orderButton.addEventListener('click', function() {
                // Animate the button
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
                
                // Show order modal
                const modal = document.createElement('div');
                modal.innerHTML = `
                    <div style="
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0,0,0,0.7);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 2000;
                        animation: fadeIn 0.3s ease;
                    ">
                        <div style="
                            background: white;
                            padding: 30px;
                            border-radius: 15px;
                            max-width: 500px;
                            width: 90%;
                            text-align: center;
                            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                        ">
                            <h3 style="color: #ff6b6b; margin-bottom: 20px; font-size: 1.8rem;">Order Ice Cream</h3>
                            <p style="margin-bottom: 25px; font-size: 1.1rem;">Thank you for your interest! Please call us at <strong>950000557</strong> to place your order, or visit our store for a delightful experience.</p>
                            <button id="closeModal" style="
                                background: linear-gradient(135deg, #ff9a3c, #ff6b6b);
                                color: white;
                                border: none;
                                padding: 12px 30px;
                                border-radius: 50px;
                                font-size: 1.1rem;
                                cursor: pointer;
                            ">Close</button>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(modal);
                
                // Close modal functionality
                document.getElementById('closeModal').addEventListener('click', function() {
                    modal.style.animation = 'fadeOut 0.3s ease';
                    setTimeout(() => {
                        document.body.removeChild(modal);
                    }, 300);
                });
                
                // Close modal when clicking outside
                modal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        modal.style.animation = 'fadeOut 0.3s ease';
                        setTimeout(() => {
                            document.body.removeChild(modal);
                        }, 300);
                    }
                });
            });
            
            // Add CSS animations
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100px); opacity: 0; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        });


