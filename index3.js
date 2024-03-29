// Get the modals
const modals = document.querySelectorAll('.modal');

// Get the <span> elements that close the modals
const spans = document.querySelectorAll('.close');

// When the user clicks on the button, open the corresponding modal
gridItems.forEach((item, index) => {
    const modal = modals[index];
    item.addEventListener('click', function() {
        modal.style.display = 'block';
        const title = item.querySelector('.title');
        modal.querySelector('.modal-title').innerText = title.innerText;
    });
});

// When the user clicks on <span> (x), close the corresponding modal
spans.forEach((span, index) => {
    span.onclick = function() {
        modals[index].style.display = 'none';
    };
});

// When the user clicks anywhere outside of a modal, close it
window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};
