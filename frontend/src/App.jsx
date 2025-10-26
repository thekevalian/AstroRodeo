import { useState } from 'react';
import './App.css';
import InteractiveArt from './components/InteractiveArt';
import ScrollSection from './components/ScrollSection';
import SplitText from './components/SplitText';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth0();

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className="App">
      <header className="top-bar">
        <div className="logo">AstroRodeo</div>
      </header>
      
      <div className="auth-container">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="auth-button">
            Log Out
          </button>
        ) : (
          <button onClick={handleOpenLoginModal} className="auth-button">
            Log In
          </button>
        )}
      </div>

      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <>
          <main className="hero-section">
            <InteractiveArt />
            <SplitText text="AstroRodeo" tag="h1" className="main-title" />
          </main>
          <ScrollSection>
            <h2>Study with AI</h2>
            <p>Gemini-powered learning</p>
          </ScrollSection>
          <ScrollSection>
            <h2>Gesture Recognition</h2>
            <p>Interactive finger-gun learning</p>
          </ScrollSection>
          <ScrollSection>
            <h2>Track Your Growth</h2>
            <p>Progress tracking and AI recommendations</p>
          </ScrollSection>
        </>
      )}

      <footer className="footer">
        <p>&copy; 2025 AstroRodeo. All rights reserved.</p>
      </footer>

      {isLoginModalOpen && (
        <LoginPage onClose={handleCloseLoginModal} />
      )}
    </div>
  );

  const handleWrongInfo = () => {
    setLoginError('Incorrect username or password.');
  };

  return (
    <div className="App">
      <header className="top-bar">
        <div className="logo">AstroRodeo</div>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="login-button">
            Logout
          </button>
        ) : (
          <button onClick={handleOpenLoginModal} className="login-button">
            Login
          </button>
        )}
      </header>

      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <>
          <main className="hero-section">
            <InteractiveArt />
            <SplitText text="AstroRodeo" tag="h1" className="main-title" />
          </main>
          <ScrollSection>
            <h2>Study with AI</h2>
            <p>Gemini-powered learning</p>
          </ScrollSection>
          <ScrollSection>
            <h2>Gesture Recognition</h2>
            <p>Interactive finger-gun learning</p>
          </ScrollSection>
          <ScrollSection>
            <h2>Track Your Growth</h2>
            <p>Progress tracking and AI recommendations</p>
          </ScrollSection>
        </>
      )}

      <footer className="footer">
        <p>&copy; 2025 AstroRodeo. All rights reserved.</p>
      </footer>

      {isLoginModalOpen && (
        <LoginPage
          onLogin={handleLogin}
          onWrongInfo={handleWrongInfo}
          onClose={handleCloseLoginModal}
          error={loginError}
        />
      )}
    </div>
  );
}

export default App;