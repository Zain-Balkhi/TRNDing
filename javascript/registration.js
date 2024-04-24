function registerUser(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();

    // Check if both fields are filled
    if (newUsername !== '' && newPassword !== '') {
        // Redirect the user to the login page
        window.location.href = 'login.html';
    } else {
        // Show error message for empty fields
        alert('Please fill in both username and password fields.');
    }
}
