const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

const users = [];

app.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("In Node JSSS-------->")
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    res.status(200).json({ message: 'Already existing account' });
  } else {
    console.log("Inside Signup else condition")
    const newUser = { email, password }; // Add password to user object
    users.push(newUser);
    console.log(users);
    res.status(200).json({ message: `User signed up with email: ${email}` });
  }
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = users.find(user => user.email === email && user.password === password);

  if (existingUser) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
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



