document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get the username and password from the form
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Create an object with the username and password
        const data = {
            username: username,
            password: password
        };

        // Send a POST request to the backend server
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                // If the response is OK (status code 200), display a success message
                alert('Login successful');

                sessionStorage.setItem('loggedIn', 'true');
            // Redirect to the main page
                window.location.href = 'index.html';
            } else {
                // If the response is not OK, display an error message
                alert('Login failed. Please check your username and password.');
            }
        })
        .catch(error => {
            // If there's an error, display an error message
            console.error('Error logging in:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
