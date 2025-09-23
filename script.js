
// Wait for DOM to be fully loaded
document.addEventListener(‘DOMContentLoaded’, function() {
try {
// Revenue counter animation
function animateCounter() {
const counter = document.getElementById(‘revenueCounter’);
if (!counter) return;

```
        const values = ['$47,250', '$52,890', '$48,670', '$51,230', '$49,840'];
        let index = 0;
        
        setInterval(() => {
            counter.textContent = values[index];
            index = (index + 1) % values.length;
        }, 2000);
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll animations with IntersectionObserver
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all animation elements
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            if (el) observer.observe(el);
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(30, 64, 175, 0.98)';
                header.style.boxShadow = '0 4px 25px rgba(30, 64, 175, 0.4)';
            } else {
                header.style.background = 'rgba(30, 64, 175, 0.95)';
                header.style.boxShadow = '0 4px 20px rgba(30, 64, 175, 0.3)';
            }
        });
    }

    // Demo booking function
    window.bookDemo = function() {
        // Replace this with your actual booking system integration
        // Examples: Calendly, Acuity, ScheduleOnce, etc.
        
        // For Calendly integration, you could do:
        // window.open('https://calendly.com/your-link', '_blank');
        
        // For now, showing an alert - replace with your booking system
        alert('Demo booking form would open here! \n\nIntegration options:\n- Calendly\n- Acuity Scheduling\n- ScheduleOnce\n- Custom booking form');
    };

    // Add urgency countdown
    function updateUrgencySpots() {
        try {
            const spots = Math.floor(Math.random() * 3) + 10; // Random between 10-12
            const elements = document.querySelectorAll('.urgency-text');
            elements.forEach(el => {
                if (el && el.textContent && el.textContent.includes('spots')) {
                    el.textContent = el.textContent.replace(/\d+/, spots);
                }
            });

            // Update final CTA spots text
            const finalCtaText = document.querySelector('.final-cta p');
            if (finalCtaText && finalCtaText.textContent && finalCtaText.textContent.includes('spots')) {
                finalCtaText.innerHTML = finalCtaText.innerHTML.replace(/\d+ spots/, spots + ' spots');
            }
        } catch (error) {
            console.log('Error updating urgency spots:', error);
        }
    }

    // Mobile menu toggle (if you want to add a mobile hamburger menu later)
    function initMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth <= 768 && navLinks) {
            // Mobile menu logic would go here
            // You can add a hamburger menu button and toggle functionality
        }
    }

    // Performance optimization - debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Add some performance monitoring
    function trackPagePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
                }, 0);
            });
        }
    }

    // Add click tracking for conversion optimization
    function trackConversionEvents() {
        // Track CTA button clicks
        document.querySelectorAll('.cta-button, .mega-cta').forEach(button => {
            button.addEventListener('click', (e) => {
                // Add your analytics tracking here
                // Example: gtag('event', 'click', { event_category: 'CTA', event_label: 'Demo Request' });
                console.log('CTA Clicked:', e.target.textContent);
            });
        });

        // Track scroll depth for engagement
        let maxScroll = 0;
        window.addEventListener('scroll', debounce(() => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                // Track significant scroll milestones
                if (maxScroll >= 25 && maxScroll < 30) {
                    console.log('Scroll Depth: 25%');
                } else if (maxScroll >= 50 && maxScroll < 55) {
                    console.log('Scroll Depth: 50%');
                } else if (maxScroll >= 75 && maxScroll < 80) {
                    console.log('Scroll Depth: 75%');
                } else if (maxScroll >= 90) {
                    console.log('Scroll Depth: 90%+');
                }
            }
        }, 1000));
    }

    // Start all functions
    animateCounter();
    initMobileMenu();
    trackPagePerformance();
    trackConversionEvents();
    
    // Update spots every 30 seconds for urgency
    setInterval(updateUrgencySpots, 30000);

    // Add exit-intent popup trigger (optional)
    let exitIntentShown = false;
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0 && !exitIntentShown) {
            exitIntentShown = true;
            // You could show an exit-intent popup here
            console.log('Exit intent detected - could show popup');
            // Example: showExitIntentPopup();
        }
    });

    console.log('BotFusion Tech website loaded successfully!');

} catch (error) {
    console.log('Script initialization error:', error);
}
```

});

// Utility functions for future use
const BotFusion = {
// Add form submission handler
handleFormSubmit: function(formData) {
// Handle contact form submissions
console.log(‘Form submitted:’, formData);
// Add your form processing logic here
},

```
// Add email validation
validateEmail: function(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
},

// Add phone validation
validatePhone: function(phone) {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
},

// Add loading state management
showLoading: function(element) {
    if (element) {
        element.innerHTML = '<span>Loading...</span>';
        element.disabled = true;
    }
},

hideLoading: function(element, originalText) {
    if (element) {
        element.innerHTML = originalText;
        element.disabled = false;
    }
}
```

};

// Make BotFusion utilities globally available
window.BotFusion = BotFusion;
