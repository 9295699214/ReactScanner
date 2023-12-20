// Login.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Redirect to the dashboard on successful login
      if (response.status === 200) {
        setRedirect('/dashboard');
        onLogin(); // Call the onLogin function passed from the parent component
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  if (redirect) {
    // Use the Navigate component to redirect to the specified route
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
