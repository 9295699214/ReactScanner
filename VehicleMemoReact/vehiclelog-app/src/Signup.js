import React, { useState } from 'react';

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
      console.log(data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>First Name:</label>
      <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      <br />

      <label>Last Name:</label>
      <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
      <br />

      <label>Greeting Name:</label>
      <input type="text" value={greetingName} onChange={(e) => setGreetingName(e.target.value)} />
      <br />

      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />

      <label>User Security:</label>
      <input type="text" value={userSecurity} onChange={(e) => setUserSecurity(e.target.value)} />
      <br />

      <label>Supervisor:</label>
      <input type="text" value={supervisor} onChange={(e) => setSupervisor(e.target.value)} />
      <br />

      <label>User Title:</label>
      <input type="text" value={userTitle} onChange={(e) => setUserTitle(e.target.value)} />
      <br />

      <label>Status:</label>
      <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      <br />

      <label>Current Logged In:</label>
      <input
        type="checkbox"
        checked={currentLoggedIn}
        onChange={(e) => setCurrentLoggedIn(e.target.checked)}
      />
      <br />

      <label>Message Notified:</label>
      <input
        type="checkbox"
        checked={messageNotified}
        onChange={(e) => setMessageNotified(e.target.checked)}
      />
      <br />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
