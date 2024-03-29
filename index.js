// Get all grid items
const gridItems = document.querySelectorAll('.grid-item');

// Function to resize the title text dynamically
function resizeTitle() {
    gridItems.forEach(item => {
        const title = item.querySelector('.title');
        const description = item.querySelector('.description');

        const maxHeight = item.offsetHeight - description.offsetHeight - 20; // Subtract description height and padding

        // Decrease font size until the title fits within the available height
        let fontSize = 20; // Initial font size
        while (title.offsetHeight > maxHeight && fontSize > 10) {
            title.style.fontSize = fontSize + 'px';
            fontSize--;
        }
    });
}

// Call resizeTitle() initially and on window resize
window.addEventListener('resize', resizeTitle);
resizeTitle();


