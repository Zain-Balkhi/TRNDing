function registerUser() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    const formData = new FormData();
    formData.append('newUsername', newUsername);
    formData.append('newPassword', newPassword);

    fetch('/register', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Registration successful
            // Redirect the user to the login page or show a success message
            window.location.href = 'login.html';
        } else {
            // Registration failed
            // Handle errors (e.g., display error message to the user)
        }
    })
    .catch(error => {
        // Handle network errors
        console.error('Error:', error);
    });
}