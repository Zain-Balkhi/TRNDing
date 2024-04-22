// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your login logic:
    // For demonstration purposes, let's just log the username and password to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // After handling login, you can redirect the user to another page
    // For example:
    // window.location.href = 'dashboard.html'; // Redirect to dashboard page
});
