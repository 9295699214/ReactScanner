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
    firstname, lastname, greetingName, username, password, userSecurity, supervisor, userTitle, status, current_logged_in, message_notified,
  } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO tb_users (firstname, lastname, greeting_name, username, password, user_security, supervisor, user_title, status, current_logged_in, message_notified) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [
        firstname, lastname, greetingName, username, password,  userSecurity, supervisor, userTitle, status, current_logged_in, message_notified,
      ]
    );

    res.status(200).json({ message: `User signed up with username: ${username}`, user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up', error: error.message });
  }
});

// ...


app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const result = await db.query('SELECT * FROM tb_users WHERE email = $1 AND password = $2', [email, password]);

    if (result.rows.length > 0) {
      res.status(200).json({ message: 'Login successful', user: result.rows[0] });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
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
