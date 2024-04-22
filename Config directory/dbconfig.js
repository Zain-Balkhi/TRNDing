
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Hashtag Trnd';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB server');
        return client.db(dbName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

// Route to handle user login
app.post('/login', async (req, res) => {
  try {
      const db = await connectToMongoDB();
      const { username, password } = req.body;

      // Check if the username and password match any records in the database
      const user = await db.collection('users').findOne({ username, password });
      
      if (user) {
          // User authenticated successfully
          res.status(200).send('Login successful');
      } else {
          // Invalid username or password
          res.status(401).send('Invalid username or password');
      }
  } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).send('Error logging in');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = { connectToMongoDB };