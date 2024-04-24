function loginUser(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the username and password from the form
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check if both fields are filled
    if (username !== '' && password !== '') {
        // Check if the username and password match the expected values
        if (username === 'wonderpets' && password === '1234test') {
            // Set session indicating user is logged in
            sessionStorage.setItem('loggedIn', 'true');
            // Redirect to the main page
            window.location.href = 'index.html';
            return; // Exit the function to prevent further execution
        }
    }

    // If the username or password is incorrect or empty, display error message
    alert('Incorrect username or password. Please try again.');
}

// Add event listener to the form submit event
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', loginUser);
});
