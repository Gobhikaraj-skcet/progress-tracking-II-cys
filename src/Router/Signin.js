
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any required fields are empty
    if (!firstName || !lastName || !email) {
      setFormError('Please fill in all required fields');
      return;
    }

    // Redirect to another page with query parameters
    history.push(`/dashboard?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`);
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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}


