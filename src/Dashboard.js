
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const firstName = params.get('firstName');
  const lastName = params.get('lastName');

  return (
    <div className="container">
      <h1>Welcome to the Dashboard, {firstName} {lastName}!</h1>
      <p>This is your personalized dashboard.</p>
    </div>
  );
}
