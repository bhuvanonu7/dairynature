
// Complete Product Data
const products = {
    // Sticks
    'orange-candy': {
        name: 'Orange Candy',
        price: '₹10',
        volume: '55ml',
        image: 'assets/orange candy.png',
        description: 'A tangy and refreshing orange flavored ice cream on a stick. Perfect for hot summer days, this treat will cool you down instantly.',
        ingredients: ['Fresh Orange Extract', 'Pure Milk Cream', 'Natural Sugar', 'Stabilizers', 'Natural Color'],
        category: 'Sticks',
        rating: '4.5',
        special: 'Most Refreshing'
    },
    'mini-chocobar': {
        name: 'Mini Chocobar',
        price: '₹10',
        volume: '40ml',
        image: 'assets/minichocobar.png',
        description: 'Chocolate coated vanilla ice cream bar, perfect for a quick treat. The perfect balance of creamy vanilla and rich chocolate.',
        ingredients: ['Premium Cocoa', 'Vanilla Extract', 'Milk Cream', 'Sugar', 'Chocolate Coating'],
        category: 'Sticks',
        rating: '4.7',
        special: 'Chocolate Lover'
    },
    'malai-kulfi': {
        name: 'Malai Kulfi',
        price: '₹10',
        volume: '35ml',
        image: 'assets/malai Kulfi.png',
        description: 'Traditional Indian frozen dessert with rich malai flavor. A classic recipe passed down through generations.',
        ingredients: ['Full Cream Milk', 'Saffron', 'Cardamom', 'Pistachios', 'Sugar', 'Malai'],
        category: 'Sticks',
        rating: '4.8',
        special: 'Traditional Favorite'
    },

    // Cones
    'butterscotch-senior': {
        name: 'Butterscotch Senior Cone',
        price: '₹35',
        volume: '120ml',
        image: 'assets/Butter_Scotch_senior_with_cap-removebg-preview.png',
        description: 'Classic butterscotch delight in every creamy scoop. A generous portion in a crispy cone.',
        ingredients: ['Butterscotch Sauce', 'Milk Cream', 'Sugar Cone', 'Caramel', 'Stabilizers'],
        category: 'Cones',
        rating: '4.6',
        special: 'Best Seller'
    },
    'vanilla-senior': {
        name: 'Vanilla Senior Cone',
        price: '₹30',
        volume: '120ml',
        image: 'assets/vanilla_cone_senior_with_cap-removebg-preview.png',
        description: 'Classic vanilla flavor in every smooth bite for more enjoyment. Perfectly balanced sweetness.',
        ingredients: ['Madagascar Vanilla', 'Milk Cream', 'Sugar Cone', 'Stabilizers', 'Natural Flavors'],
        category: 'Cones',
        rating: '4.5',
        special: 'All-Time Classic'
    },
    'butterscotch-junior': {
        name: 'Butterscotch Junior Cone',
        price: '₹20',
        volume: '70ml',
        image: 'assets/Butter_Scotch_Junior_with_cap-removebg-preview.png',
        description: 'Small cone, big butterscotch happiness. Perfect for kids or a light treat.',
        ingredients: ['Butterscotch Sauce', 'Milk Cream', 'Sugar Cone', 'Caramel'],
        category: 'Cones',
        rating: '4.4',
        special: 'Kid Favorite'
    },
    'vanilla-junior': {
        name: 'Vanilla Junior Cone',
        price: '₹15',
        volume: '70ml',
        image: 'assets/vanilla__junior_coner_with_cap-removebg-preview.png',
        description: 'Little cone, pure vanilla joy. A perfectly sized treat for any time of day.',
        ingredients: ['Vanilla Extract', 'Milk Cream', 'Sugar Cone', 'Natural Flavors'],
        category: 'Cones',
        rating: '4.3',
        special: 'Perfect Snack'
    },
    'strawberry-junior': {
        name: 'Strawberry Junior Cone',
        price: '₹15',
        volume: '70ml',
        image: 'assets/strawerry_junior_with_cap-removebg-preview.png',
        description: 'Sweet strawberry delight in a little cone. Made with real fruit for authentic taste.',
        ingredients: ['Strawberry Pulp', 'Milk Cream', 'Sugar Cone', 'Natural Color'],
        category: 'Cones',
        rating: '4.5',
        special: 'Fruity Treat'
    },
    'vanilla-mini': {
        name: 'Vanilla Mini Cone',
        price: '₹10',
        volume: '40ml',
        image: 'assets/vanilla_mini_cone_with_caop-removebg-preview.png',
        description: 'Tiny cone, timeless vanilla taste. A bite-sized treat that delivers big flavor.',
        ingredients: ['Vanilla Extract', 'Milk Cream', 'Mini Sugar Cone', 'Natural Flavors'],
        category: 'Cones',
        rating: '4.2',
        special: 'Mini Delight'
    },

    // Cups
    'vanilla-small': {
        name: 'Vanilla Small Cup',
        price: '₹6',
        volume: '35ml',
        image: 'assets/large cup.png',
        description: 'Classic vanilla flavor in a convenient small cup. Perfect for a quick, satisfying treat.',
        ingredients: ['Vanilla Extract', 'Milk Cream', 'Sugar', 'Natural Stabilizers'],
        category: 'Cups',
        rating: '4.3',
        special: 'Budget Friendly'
    },
    'strawberry-small': {
        name: 'Strawberry Small Cup',
        price: '₹6',
        volume: '35ml',
        image: 'assets/strawberry .png',
        description: 'Sweet strawberry flavored ice cream in a small cup. Real fruit flavor in every spoon.',
        ingredients: ['Strawberry Pulp', 'Milk Cream', 'Sugar', 'Natural Color'],
        category: 'Cups',
        rating: '4.4',
        special: 'Fruit Burst'
    },
    'vanilla-large': {
        name: 'Vanilla Large Cup',
        price: '₹10',
        volume: '60ml',
        image: 'assets/large cup.png',
        description: 'Classic vanilla flavor in a larger cup for more enjoyment. Share with friends or enjoy alone!',
        ingredients: ['Madagascar Vanilla', 'Milk Cream', 'Sugar', 'Natural Stabilizers'],
        category: 'Cups',
        rating: '4.6',
        special: 'Popular Choice'
    },
    'strawberry-large': {
        name: 'Strawberry Large Cup',
        price: '₹10',
        volume: '60ml',
        image: 'assets/strawberry .png',
        description: 'Sweet strawberry flavored ice cream in a large cup. Double the fruity goodness.',
        ingredients: ['Strawberry Pulp', 'Milk Cream', 'Sugar', 'Natural Color'],
        category: 'Cups',
        rating: '4.5',
        special: 'Double Delight'
    },

    // Sundae
    'nature-sundae': {
        name: 'Nature Sundae',
        price: '₹20',
        volume: '70ml',
        image: 'assets/nature sundae.png',
        description: 'A delightful sundae with chocolate syrup and nuts. Layers of creamy goodness with crunch.',
        ingredients: ['Vanilla Ice Cream', 'Chocolate Syrup', 'Chopped Nuts', 'Whipped Cream'],
        category: 'Sundae',
        rating: '4.8',
        special: 'Special Treat'
    },
    'gud-bud': {
        name: 'Gud Bud',
        price: '₹35',
        volume: '100ml',
        image: 'assets/gud bud.png',
        description: 'A rich and flavorful sundae with jaggery and dry fruits. Traditional Indian flavors at their best.',
        ingredients: ['Kulfi Base', 'Jaggery', 'Mixed Dry Fruits', 'Saffron', 'Cardamom'],
        category: 'Sundae',
        rating: '4.9',
        special: 'Premium Experience'
    },



    // Special Treats
    'ice-cream-cake': {
        name: 'Dry Fruit Fantasy',
        price: '₹45',
        volume: '45ml',
        image: 'assets/dry fruit fantasy.png',
        description: 'Delicious Dry Fruit Fantasy for special occasions. Celebrate with our creamy, dreamy cake.',
        ingredients: ['Ice Cream Layers', 'Sponge Cake', 'Chocolate Ganache', 'Decorations'],
        category: 'Special Treats',
        rating: '4.9',
        // special: 'Festive Special'
    },
    'ice-cream-sandwich': {
        name: 'Alphonso Mango',
        price: '₹110',
        volume: '500ml',
        image: 'assets/alphonso mango .png',
        description: 'Ice cream between two delicious cookies. Portable and perfect for on-the-go.',
        ingredients: ['mengo', 'Chocolate Chip Cookies', 'Natural Ingredients'],
        category: 'Special Treats',
        rating: '4.6',
        special: 'Portable Treat'
    },



    // Party Packs
    'party-pack-vanilla-butterscotch': {
        name: 'Vanilla + Butterscotch Party Pack',
        price: '₹230',
        volume: '700ml + 50ml Extra',
        image: 'assets/vennilabutterscotch.png',
        description: 'Perfect combo pack for parties and gatherings. Two most popular flavors in one pack.',
        ingredients: ['Vanilla Ice Cream', 'Butterscotch Ice Cream', 'Premium Ingredients'],
        category: 'Party Packs',
        rating: '4.8',
        special: 'Best Value'
    },
    'assorted-cones': {
        name: 'Assorted Cones Pack',
        price: '₹280',
        volume: '12 Cones Mixed',
        image: 'assets/assorted-cones.png',
        description: 'Variety pack with different flavored cones. Something for everyone in this collection.',
        ingredients: ['Various Flavors', 'Sugar Cones', 'Milk Cream', 'Natural Ingredients'],
        category: 'Party Packs',
        rating: '4.6',
        special: 'Variety Pack'
    },




};

// DOM Elements
const loading = document.getElementById('loading');
const productPage = document.getElementById('productPage');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const productCards = document.querySelectorAll('.product-card');
const mainHeader = document.getElementById('mainHeader');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 800);

    // Add click handlers to product cards
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const productId = card.dataset.product;
            openProductModal(productId);
        });

        // Add hover sound effect simulation
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Close modal handlers
    closeModal.addEventListener('click', closeProductModal);
    productPage.addEventListener('click', (e) => {
        if (e.target === productPage) {
            closeProductModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProductModal();
        }
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            mainHeader.classList.add('header-scrolled');
        } else {
            mainHeader.classList.remove('header-scrolled');
        }

        // Parallax effect for hero
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all product cards and categories
    document.querySelectorAll('.product-card, .category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Initialize floating elements animation
    initFloatingElements();
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

    // Add animation to menu items
    if (mainNav.classList.contains('active')) {
        const menuItems = mainNav.querySelectorAll('li');
        menuItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('animate__animated', 'animate__fadeInRight');
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            mainNav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Floating elements initialization
function initFloatingElements() {
    const floatingContainer = document.querySelector('.floating-elements');
    const emojis = ['🍦', '🍨', '🍧', '🍫', '🧊', '🍓'];

    // Get already displayed emojis from static HTML elements
    const displayedEmojis = new Set();
    floatingContainer.querySelectorAll('.floating-element').forEach(el => {
        displayedEmojis.add(el.textContent);
    });

    // Get remaining emojis that haven't been used
    const availableEmojis = emojis.filter(emoji => !displayedEmojis.has(emoji));

    // Only create new elements if there are available emojis
    availableEmojis.forEach((emoji) => {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.fontSize = `${Math.random() * 3 + 1.5}rem`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.opacity = `${Math.random() * 0.2 + 0.1}`;
        element.textContent = emoji;

        // Add random animation class
        const animations = ['float-1', 'float-2', 'float-3', 'float-4', 'float-5'];
        element.classList.add(animations[Math.floor(Math.random() * animations.length)]);

        floatingContainer.appendChild(element);
    });
}

// Product Modal Functions
function openProductModal(productId) {
    const product = products[productId];
    if (!product) return;

    const stars = '★'.repeat(Math.floor(parseFloat(product.rating))) +
        '☆'.repeat(5 - Math.floor(parseFloat(product.rating)));

    modalContent.innerHTML = `
                <div class="modal-image" style="background-image: url('${product.image}')"></div>
                <div class="modal-info">
                    <h2>${product.name}</h2>
                    <div class="price-tag">${product.price} <span class="volume">${product.volume}</span></div>
                    <div class="rating">
                        ${stars} <span>${product.rating}/5</span>
                    </div>
                    <div style="margin: 15px 0; padding: 10px 20px; background: linear-gradient(135deg, var(--light), #fff); border-radius: 10px; display: inline-block;">
                        <strong>${product.special}</strong>
                    </div>
                    <p style="margin-bottom: 25px; font-size: 1.15rem; line-height: 1.8;">${product.description}</p>
                    
                    <div class="ingredients">
                        <h4>Ingredients</h4>
                        <ul>
                            ${product.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div style="margin: 30px 0; padding: 25px; background: #f8f8f8; border-radius: 15px; border-left: 4px solid var(--accent);">
                        <h4 style="margin-bottom: 15px;">Storage Instructions</h4>
                        <p style="margin-bottom: 10px;"><i class="fas fa-snowflake"></i> Store at -18°C or below</p>
                        <p style="margin-bottom: 10px;"><i class="fas fa-clock"></i> Consume within 24 hours of opening</p>
                        <p><i class="fas fa-shield-alt"></i> Keep frozen until ready to serve</p>
                    </div>
                    
                    <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 35px;">
                        <button class="btn" onclick="orderProduct('${productId}')">
                            <i class="fas fa-shopping-cart"></i> Order Now
                        </button>
                        <button class="btn" onclick="shareProduct('${productId}')" style="background: #2196F3;">
                            <i class="fas fa-share-alt"></i> Share
                        </button>
                        <button class="btn" onclick="closeProductModal()" style="background: #666;">
                            <i class="fas fa-times"></i> Close
                        </button>
                    </div>
                </div>
            `;

    productPage.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Add animation to modal content
    modalContent.style.animation = 'none';
    setTimeout(() => {
        modalContent.style.animation = 'modalSlideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }, 10);
}

function closeProductModal() {
    productPage.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function orderProduct(productId) {
    const product = products[productId];
    const message = `Hi Dairy Nature! I'd like to order:\n\n🍦 *${product.name}* (${product.volume})\n💰 Price: ${product.price}\n\nPlease let me know about delivery options.`;
    const whatsappUrl = `https://wa.me/917090553320?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function shareProduct(productId) {
    const product = products[productId];
    const shareText = `Check out ${product.name} from Dairy Nature! ${product.description} Only ${product.price} for ${product.volume}. Visit: ${window.location.href}`;

    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback for desktop
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Product link copied to clipboard!');
        });
    }
}

// Add scroll progress indicator
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    // Update header gradient based on scroll
    if (mainHeader) {
        const opacity = Math.min(scrolled / 100, 0.95);
        mainHeader.style.background = `rgba(255, 255, 255, ${opacity})`;
    }
});

// Add click sound effect (simulated)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
        // Simulate click effect
        const btn = e.target.classList.contains('btn') ? e.target : e.target.closest('.btn');
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
    }
});

// Seasonal greeting
const hour = new Date().getHours();
let greeting = '';
if (hour < 12) greeting = 'Good Morning! ☀️';
else if (hour < 18) greeting = 'Good Afternoon! 🌤️';
else greeting = 'Good Evening! 🌙';

// Add greeting to hero if needed
setTimeout(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const greetingElement = document.createElement('div');
        greetingElement.style.cssText = `
                    margin-bottom: 20px;
                    padding: 10px 20px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50px;
                    display: inline-block;
                    font-size: 1.2rem;
                    backdrop-filter: blur(5px);
                `;
        greetingElement.textContent = greeting;
        heroContent.insertBefore(greetingElement, heroContent.firstChild);
    }
}, 1000);


if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    document.body.classList.add("mobile-device");
}
