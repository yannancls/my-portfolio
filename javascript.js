const hamburgerbutton = document.querySelector('.hamburger-button');
const xbutton = document.querySelector('.x-button');
const dropdown = document.querySelector('.drpdwn-div');

// Set the screen width condition
const mediaQuery = window.matchMedia('(max-width: 700px)');

// Function to handle the menu visibility
function handleMenuDisplay() {
    if (mediaQuery.matches) {
        // Screen width is 700px or smaller, show the hamburger button
        hamburgerbutton.style.display = 'inline';
        xbutton.style.display = 'none';
        dropdown.style.display = 'none';
    } else {
        // Screen width is larger than 700px, hide both buttons
        hamburgerbutton.style.display = 'none';
        xbutton.style.display = 'none';
        dropdown.style.display = 'none';
    }
}

// Show the menu (for screen width 700px or smaller)
function showMenu() {
    if (mediaQuery.matches) {
        hamburgerbutton.style.opacity = '0';
        xbutton.style.opacity = '1';
        setTimeout(() => {
            hamburgerbutton.style.display = 'none';
            xbutton.style.display = 'inline';
            dropdown.style.display = 'inline';
        }, 200);
    }
}

// Hide the menu (for screen width 700px or smaller)
function hideMenu() {
    if (mediaQuery.matches) {
        xbutton.style.opacity = '0';
        hamburgerbutton.style.display = 'inline';
        setTimeout(() => {
            hamburgerbutton.style.opacity = '1';
            xbutton.style.display = 'none';
            dropdown.style.display = 'none';
        }, 200);
    }
}

// Add a listener for screen resizing
mediaQuery.addEventListener('change', handleMenuDisplay);

// Call the function once to set the correct initial state
handleMenuDisplay();
