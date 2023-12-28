// Login.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; // Import your custom CSS file for styling

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Successful login
        if (data.user && (data.user.user_security === 'Super' || data.user.user_security === 'Admin' || data.user.user_security === 'Editor')) {
          // Proceed with login for Super/Admin users
          setRedirect('/dashboard');
          onLogin(data.user); // Pass the user data to the onLogin function
          toast.success('Login successful!');
        } else {
          // User is not authorized
          console.error('Not authorized to login:', data.message);
          toast.error('Login failed. You are not authorized to log in. Contact admin');
        }
      } else {
        // Failed login
        console.error('Error logging in:', data.message || 'Unknown error');
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error.message || 'Unknown error');
      toast.error('Login failed. Please try again.');
    }
  };

  if (redirect) {
    // Redirect to the specified route
    return <Navigate to={redirect} />;
  }

  return (
    <div className="login-container">
      <h2>Log in</h2>
      <p>Welcome back! Log in to your account.</p>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Log in</button>
      <div className="signup-link">
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
