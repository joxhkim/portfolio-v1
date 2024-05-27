// Array of technologies for the tech stack
const technologiesArray = ["Java", "C#", "Python", "JavaScript", "TypeScript", "C++", "React", "Node.js", "Express", "Django", "Flask", "Tailwind", "PostgreSQL"];

// Function to dynamically populate the tech stach section
function populateTechStack(techArray) {
    const techStackElement = document.querySelector(".tech-stack")
    techArray.map((techItem) => {
        const techStackListItem = document.createElement("li");
        techStackListItem.textContent = techItem;
        techStackElement.appendChild(techStackListItem);
    });
}

// Function to set navbar opacity based on scroll position
function setupNavbarOpacity() {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        }
    });
}

// Function to toggle navigation menu on small screens
function setupMobileMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle the navLinks menu when menu icon is clicked
    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });

    // Close the navLinks menu when clicked outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickInsideMenuIcon = menuIcon.contains(event.target);
        if (!isClickInsideNav && !isClickInsideMenuIcon) {
            navLinks.classList.remove('open');
        }
    });

    // Add event listener on the navLinks container to see if an href was clicked
    navLinks.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('open');
            const href = event.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView();
                }
            }
        }
    });
}



document.addEventListener('DOMContentLoaded', () => {
    populateTechStack(technologiesArray);
    setupNavbarOpacity();
    setupMobileMenu();
});

