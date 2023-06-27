// LogoutButton.js
import React from 'react';

function LogoutButton() {
  const handleLogout = async () => {
    try {
      // Make a POST request to the logout endpoint
      await fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });

      // Delete the JWT token from local storage
      localStorage.removeItem('jwtToken');

      // Redirect the user to the login page
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
      // Handle any error that occurs during logout
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;