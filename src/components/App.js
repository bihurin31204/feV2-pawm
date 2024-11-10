import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Topics from './Topics';
import Simulation from './Simulation';
import Home from './Home';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="header">
          <Link to="/" className="logo">V-<span>Lab Fisika</span></Link>
          <div className="auth-section">
            <nav className="navbar">
              <Link to="/">Home</Link>
              <Link to="/topics">Simulasi</Link>
              {isAuthenticated ? (
                <div className="profile-menu" ref={menuRef}>
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="profile-picture"
                    onClick={() => setMenuOpen(!menuOpen)}
                  />
                  {menuOpen && (
                    <div className="dropdown-menu">
                      <span className="user-name">{user.name}</span>
                      <button
                        className="logout-button"
                        onClick={() => logout({ returnTo: window.location.origin })}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button className="login-button" onClick={() => loginWithRedirect()}>Login</button>
              )}
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/simulation/:topicId" element={<Simulation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
