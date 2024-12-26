// Select the thank-you section
const thankYouSection = document.getElementById('thank-you');

// Create the Intersection Observer to detect when the section comes into view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add the "show" class to trigger animation
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

// Observe the thank-you section
observer.observe(thankYouSection);

// Initialize Typed.js to animate text
var typed = new Typed(".text", {
    strings: ["frontend Developer", "web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

