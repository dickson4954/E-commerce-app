import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track if user is logged in
  const [error, setError] = useState('');
  const [formType, setFormType] = useState('login'); // Initial form type is login

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock successful login
    setLoggedIn(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Mock successful signup
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    setEmail('');
    setFirstName('');
    setLastName('');
    setError('');
  };

  return (
    <div className="form text-center">
      {loggedIn ? (
        <LoggedInContent username={username} handleLogout={handleLogout} />
      ) : (
        <div>
          <div className="tab-group">
            <button
              className={`tab ${formType === 'login' ? 'active' : ''}`}
              onClick={() => setFormType('login')}
            >
              Log In
            </button>
            <button
              className={`tab ${formType === 'signup' ? 'active' : ''}`}
              onClick={() => setFormType('signup')}
            >
              Sign Up
            </button>
          </div>
          {formType === 'login' && (
            <>
              <h1>Welcome Back!</h1>
              <form onSubmit={handleLogin}>
                <div className="field-wrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="field-wrap">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <p className="forgot">
                  <a href="https://www.web-leb.com/code">Forgot Password?</a>
                </p>
                <button className="button button-block" type="submit">
                  Login
                </button>
              </form>
            </>
          )}
          {formType === 'signup' && (
            <>
              <h1>Register</h1>
              <form onSubmit={handleSignup}>
                <div className="top-row">
                  <div className="field-wrap">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field-wrap">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="field-wrap">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="field-wrap">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="field-wrap">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button className="button button-block" type="submit">
                  Sign Up
                </button>
              </form>
            </>
          )}
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      )}
    </div>
  );
};

const LoggedInContent = ({ username, handleLogout }) => (
  <>
    <h2>Welcome, {username}!</h2>
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
    <Link to="/home" className="btn btn-info ms-2">
      Home
    </Link>
  </>
);

export default Login;
