// Array of background images for the header with relative paths
const headerImages = [
    'url(Nigel1.jpg)',
    'url(Nigel2.jpg)',
    'url(Nigel3.jpg)',
    'url(Nigel4.jpg)',
    'url(Nigel5.jpg)'
];

// Function to change the header background image
function changeHeaderBackground() {
    const header = document.getElementById('Nigel'); // Get the header element by ID

    // Get a random index from the array to pick a background image
    const randomIndex = Math.floor(Math.random() * headerImages.length);

    // Set the background image of the header
    header.style.backgroundImage = headerImages[randomIndex];
}

// Automatically change the header background every 10 seconds
setInterval(changeHeaderBackground, 4000);

// Run the function immediately to apply a background when the page loads
changeHeaderBackground();
