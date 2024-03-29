// Get all grid items
const gridItems = document.querySelectorAll('.grid-item');

// Function to handle button clicks
function handleButtonClick() {
    alert("Button clicked!"); // Example action, you can replace this with your desired action
}

// Add event listener to each grid item
gridItems.forEach(item => {
    item.addEventListener('click', handleButtonClick);
});