import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './LoginPage.css';

const LoginPage = ({ onClose }) => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>×</button>
          <h2>Welcome {user?.name}!</h2>
          <p>You are logged in.</p>
          <div className="modal-actions">
            <button onClick={() => {
              logout({ returnTo: window.location.origin });
              onClose();
            }} className="logout-button">
              Log Out
            </button>
            <button onClick={onClose} className="close-modal-button">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Login</h2>
        <div className="modal-actions">
          <button onClick={() => loginWithRedirect()} className="login-button">
            Log In with Auth0
          </button>
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
