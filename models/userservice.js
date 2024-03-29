// app.js (or any other file where you need to interact with MongoDB)

const mongoose = require('./config/db'); // Import MongoDB connection
const userService = require('./services/userService'); // Import userService

// Example usage:
(async () => {
  try {
    // Create a new user
    const newUser = await userService.createUser({
      name: 'Alice',
      email: 'alice@example.com'
    });
    console.log('New user created:', newUser);

    // Find all users
    const allUsers = await userService.findAllUsers();
    console.log('All users:', allUsers);

    // Find a user by ID
    const userById = await userService.findUserById(newUser._id);
    console.log('User by ID:', userById);

    // Update a user by ID
    const updatedUser = await userService.updateUserById(newUser._id, { name: 'Alice Smith' });
    console.log('Updated user:', updatedUser);

    // Delete a user by ID
    const deletedUser = await userService.deleteUserById(newUser._id);
    console.log('Deleted user:', deletedUser);
  } catch (error) {
    console.error('Error:', error);
  }
})();
