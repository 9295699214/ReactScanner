import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [greetingName, setGreetingName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userSecurity, setUserSecurity] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [userTitle, setUserTitle] = useState('');
  const [status, setStatus] = useState('');
  const [currentLoggedIn, setCurrentLoggedIn] = useState(false);
  const [messageNotified, setMessageNotified] = useState(false);

  const [redirect, setRedirect] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate(redirect);
    }
  }, [redirect, navigate]);

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          greetingName,
          username,
          password,
          userSecurity,
          supervisor,
          userTitle,
          status,
          current_logged_in: currentLoggedIn,
          message_notified: messageNotified,
        }),
      });
      const data = await response.json();
      if(data){
        toast.success('Signup successful!');
        setTimeout(() =>{
          setRedirect('/login');
        },2000)
      }else{
        toast.error('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  
  };

  return (
    <div className="signup-container">
    <h2>Signup</h2>
      <label htmlFor="firstname" className="signup-label">First Name:</label>
      <input
        type="text"
        id="firstname"
        className="signup-input"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <br />

      <label htmlFor="lastname" className="signup-label">Last Name:</label>
      <input 
        type="text" 
        value={lastname} 
        className="signup-input" 
        onChange={(e) => setLastname(e.target.value)} />
      <br />

      <label htmlFor="greetingName" className="signup-label">Greeting Name:</label>
    <input
      type="text"
      id="greetingName"
      className="signup-input"
      value={greetingName}
      onChange={(e) => setGreetingName(e.target.value)}
    />
    <br />

    <label htmlFor="username" className="signup-label">Username:</label>
    <input
      type="text"
      id="username"
      className="signup-input"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <br />

    <label htmlFor="password" className="signup-label">Password:</label>
    <input
      type="password"
      id="password"
      className="signup-input"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <br />
    <label htmlFor="userSecurity" className="signup-label">User Security:</label>
    <input
      type="text"
      id="userSecurity"
      className="signup-input"
      value={userSecurity}
      onChange={(e) => setUserSecurity(e.target.value)}
    />
    <br />

    <label htmlFor="supervisor" className="signup-label">Supervisor:</label>
    <input
      type="text"
      id="supervisor"
      className="signup-input"
      value={supervisor}
      onChange={(e) => setSupervisor(e.target.value)}
    />
    <br />

    <label htmlFor="userTitle" className="signup-label">User Title:</label>
    <input
      type="text"
      id="userTitle"
      className="signup-input"
      value={userTitle}
      onChange={(e) => setUserTitle(e.target.value)}
    />
    <br />

    <label htmlFor="status" className="signup-label">Status:</label>
    <input
      type="text"
      id="status"
      className="signup-input"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
    />
    <br />

      <label htmlFor="currentLoggedIn" className="signup-label">Current Logged In:</label>
    <input
      type="checkbox"
      id="currentLoggedIn"
      className="signup-checkbox"
      checked={currentLoggedIn}
      onChange={(e) => setCurrentLoggedIn(e.target.checked)}
    />
    <br />

    <label htmlFor="messageNotified" className="signup-label">Message Notified:</label>
    <input
      type="checkbox"
      id="messageNotified"
      className="signup-checkbox"
      checked={messageNotified}
      onChange={(e) => setMessageNotified(e.target.checked)}
    />
    <br />

    <button className="signup-button" onClick={handleSignup}>
      Signup
    </button>
    <ToastContainer
      position="top-right"
      autoClose={2000}
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

export default Signup;
