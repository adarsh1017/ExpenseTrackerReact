/*
import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Import Firebase app compat module
import 'firebase/compat/auth'; // Import Firebase auth compat module

import './SignupScreen.css'; // Import CSS file for styling

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [signedUp, setSignedUp] = useState(false); // State to track signup status

  const handleInputChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (!email || !password || !confirmPassword) {
        throw new Error('Please fill in all fields');
      }
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Create user with email and password
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      // Reset fields after successful registration
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      console.log('User has successfully signed up.'); // Logging successful registration

      // Update state to indicate successful signup
      setSignedUp(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      // Sign in user with email and password
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Reset fields after successful login
      setEmail('');
      setPassword('');

      console.log('User has successfully logged in.'); // Logging successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h2>{signedUp ? 'Login' : 'Signup'}</h2> 
        {error && <p style={{ color: 'red' }}>{error}</p>}
        { !signedUp ? ( 
          <form onSubmit={handleSignup}>
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
              />
              <span className="placeholder">Email</span>
            </div>
            <div className="input-group">
              <input
                type="password"
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
              />
              <span className="placeholder">Password</span>
            </div>
            <div className="input-group">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e, setConfirmPassword)}
              />
              <span className="placeholder">Confirm Password</span>
            </div>
            <button type="submit">Signup</button>
          </form>
        ) : (
          <form onSubmit={handleLogin}> 
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
              />
              <span className="placeholder">Email</span>
            </div>
            <div className="input-group">
              <input
                type="password"
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
              />
              <span className="placeholder">Password</span>
            </div>
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupScreen;
*/

import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Import Firebase app compat module
import 'firebase/compat/auth'; // Import Firebase auth compat module
import './SignupScreen.css'; // Import CSS file for styling

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzuEJwdCPwjeHNh7lDZ2F55_LoRHxcgBg",
    authDomain: "expense-tracker-15059.firebaseapp.com",
    projectId: "expense-tracker-15059",
    storageBucket: "expense-tracker-15059.appspot.com",
    messagingSenderId: "984497806329",
    appId: "1:984497806329:web:60df7797060a6608f47b28",
    measurementId: "G-BLVLLE95FH"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleInputChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (!email || !password || !confirmPassword) {
        throw new Error('Please fill in all fields');
      }
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Create user with email and password
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      // Reset fields after successful registration
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      console.log('User has successfully signed up.'); // Logging successful registration

      // Update state to indicate successful signup
      setLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      // Sign in user with email and password
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Reset fields after successful login
      setEmail('');
      setPassword('');

      console.log('User has successfully logged in.'); // Logging successful login

      // Update state to indicate successful login
      setLoggedIn(true);
    } catch (error) {
      setError(error.message); // Display error message to the user
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        {loggedIn ? (
          <div>
            <h2>Welcome to Expense Tracker</h2>
            {/* Add your content for the dashboard here */}
          </div>
        ) : (
          <>
            <h2>Signup</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSignup}>
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail)}
                />
                <span className="placeholder">Email</span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => handleInputChange(e, setPassword)}
                />
                <span className="placeholder">Password</span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => handleInputChange(e, setConfirmPassword)}
                />
                <span className="placeholder">Confirm Password</span>
              </div>
              <button type="submit">Signup</button>
            </form>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail)}
                />
                <span className="placeholder">Email</span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => handleInputChange(e, setPassword)}
                />
                <span className="placeholder">Password</span>
              </div>
              <button type="submit">Login</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SignupScreen;