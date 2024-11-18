// Function to show more cake information
function showMoreCakes() {
    alert('Explore our full menu for more delicious cakes!');
}

// Add event listener for "Show More" button if it exists on the home page
document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.getElementById('showMore');
    if (showMoreButton) {
        showMoreButton.addEventListener('click', showMoreCakes);
    }

    // Handle form submission on the contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thank you for contacting us, ${name}! We will get back to you shortly.`);
            contactForm.reset(); // Reset the form
        });
    }
});

// Navigation function to highlight active page
function highlightActivePage() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active'); // Add class to highlight active link
        }
    });
}

// Call highlightActivePage to set the active link based on the current URL
highlightActivePage();
