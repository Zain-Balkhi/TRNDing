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

            // PUT IN REAL MONGOCLIENT AND URL ON EACH PULL, PUT IN DUMMY ON EACH PUSH, DON'T WANT PI ON PUBLIC REPO    
            var MongoClient = require('mongodb').MongoClient;
            var url = "duh";
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("mydb");
                var myobj = { username: newUsername, password: newPassword };
                dbo.collection("users").insertOne(myobj, function(err, res) {
                  if (err) throw err;
                  db.close();
                });
              });
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