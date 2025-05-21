document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('fa-times');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add to cart animation
    const addToCartButtons = document.querySelectorAll('.btn-cart-small');
    const cartButton = document.querySelector('.btn-cart');
    let cartCount = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            cartButton.setAttribute('data-count', cartCount);
            
            // Create flying item effect
            const productCard = this.closest('.produk-card');
            const productImg = productCard.querySelector('img').cloneNode(true);
            
            productImg.style.position = 'fixed';
            productImg.style.width = '50px';
            productImg.style.height = '50px';
            productImg.style.borderRadius = '50%';
            productImg.style.objectFit = 'cover';
            productImg.style.zIndex = '1000';
            productImg.style.transition = 'all 0.5s ease-in-out';
            
            const imgRect = productCard.querySelector('img').getBoundingClientRect();
            productImg.style.left = `${imgRect.left}px`;
            productImg.style.top = `${imgRect.top}px`;
            
            document.body.appendChild(productImg);
            
            const cartRect = cartButton.getBoundingClientRect