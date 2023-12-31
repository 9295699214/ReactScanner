const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./dbConfig'); // Import the PostgreSQL connection
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

// Replace the in-memory users array with database queries
// ...

app.post('/signup', async (req, res) => {
  const {
    firstname, lastname, greetingName, username, password, userSecurity, supervisor, userTitle, status, current_logged_in, message_notified,qr,qrgenerated
  } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO tb_users (firstname, lastname, greeting_name, username, password, user_security, supervisor, user_title, status, current_logged_in, message_notified, qr, qrgenerated) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
      [
        firstname, lastname, greetingName, username, password,  userSecurity, supervisor, userTitle, status, current_logged_in, message_notified,qr, qrgenerated
      ]
    );

    res.status(200).json({ message: `User signed up with username: ${username}`, user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up', error: error.message });
  }
});

// ...


app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.query('SELECT * FROM tb_users WHERE username = $1 AND password = $2', [username, password]);
    if (result.rows.length > 0) {
      // Successful login
      res.status(200).json({ message: 'Login successful', user: result.rows[0] });
    } else {
      // Invalid credentials
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

app.post('/find', async (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const userSecurity = req.body.userSecurity;

  try {
    // Check if any of the required fields are empty
    if (!firstname || !lastname || !userSecurity) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const result = await db.query('SELECT qr FROM tb_users WHERE firstname = $1 AND lastname = $2 AND user_security = $3', [firstname, lastname, userSecurity]);
    console.log("result--->", result)
    if (result.rows.length > 0) {
      // User found
      res.status(200).json({ message: 'User found', qr: result.rows[0].qr });
    } else {
      // User not found
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    // Log the error for debugging
    console.error('Error finding user:', error);

    // Return a more specific error message
    res.status(500).json({ message: 'Error finding user', error: error.message });
  }
});



// Serve React build
app.use(express.static(path.join(__dirname, '../VehicleMemoR/vehiclelog-app/build')));

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../VehicleMemoR/vehiclelog-app/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
