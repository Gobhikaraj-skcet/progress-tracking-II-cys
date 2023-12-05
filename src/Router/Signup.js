
import React, { useState } from 'react';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any required fields are empty
    if (!firstName || !lastName || !email || !password) {
      setFormError('Please fill in all required fields');
      return;
    }

    // Perform your sign-up logic/validation here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);

    // Optional: Redirect to another page after sign up
    // window.location.href = "dashboard.html";
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      {formError && <p className="error-message">{formError}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}


Next, update the App.js file in the src folder to include the SignUp component:

jsx
import React from 'react';
import SignUp from './SignUp';

export default function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}
