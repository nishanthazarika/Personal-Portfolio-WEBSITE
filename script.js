// Select the menu icon and the navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle the 'active' class on the navbar when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the 'bx-x' class on the menu icon
    navbar.classList.toggle('active'); // Toggle the 'active' class on the navbar
});

// Highlight active nav links on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to trigger animation on all elements within a section
function triggerSectionAnimation(section) {
    const scrollElements = section.querySelectorAll('.animate.scroll');
    scrollElements.forEach((el) => {
        el.style.animation = 'none'; // Reset animation
        void el.offsetWidth; // Trigger reflow (force the browser to acknowledge the change)
        el.style.animation = 'slideAndFade 2.5s ease forwards'; // Reapply animation
    });
}

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' from all nav links and add to the current section's link
            navLinks.forEach((link) => link.classList.remove('active'));
            document
                .querySelector(`header nav a[href*='${id}']`)
                .classList.add('active');

            // Add 'show-animate' class and trigger animations
            sec.classList.add('show-animate');
            triggerSectionAnimation(sec); // Trigger animation when section comes into view
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Toggle sticky class for header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Close the navbar when a nav link is clicked (optional for mobile usability)
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x'); // Remove the 'bx-x' class
        navbar.classList.remove('active'); // Remove the 'active' class
    });
});

// Trigger animation for "Home" section on page load (in case it's already visible)
document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.querySelector('.home');
    if (homeSection) {
        homeSection.classList.add('show-animate'); // Ensure the animation is applied on load
        triggerSectionAnimation(homeSection); // Trigger animation for "Home" section
    }
});

// When the "Home" navigation link is clicked, trigger the animation
const homeLink = document.querySelector('header nav a[href="#home"]'); // Assuming the link has href="#home"
if (homeLink) {
    homeLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor link behavior (scrolling)

        const homeSection = document.querySelector('#home');
        if (homeSection) {
            homeSection.classList.add('show-animate'); // Add the class to trigger animation
            triggerSectionAnimation(homeSection); // Trigger animation for "Home" section
        }

        // Smoothly scroll to the "Home" section
        window.scrollTo({
            top: homeSection.offsetTop,
            behavior: 'smooth',
        });
    });
}

// When the "Let's Talk" button is clicked, smoothly scroll to the "contact" section
const talkButton = document.querySelector('a[href="#contact"]'); // Select the "Let's Talk" button
if (talkButton) {
    talkButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor link behavior

        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.classList.add('show-animate'); // Add the class to trigger animation
            triggerSectionAnimation(contactSection); // Trigger animation for "Contact" section
        }

        // Smoothly scroll to the "Contact" section
        window.scrollTo({
            top: contactSection.offsetTop,
            behavior: 'smooth',
        });
    });
}
